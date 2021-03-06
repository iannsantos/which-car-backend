import AWS from "aws-sdk";
import crypto from "crypto";
import multer from "multer";
import multers3 from "multer-s3";
import { extname, resolve } from "path";

const {
  BUCKET_NAME,
  STORAGE_TYPE,
  ACCESS_KEY,
  SECRET_ACCESS_KEY,
  DEFAULT_REGION
} = process.env;

const storageTypes = {
  local: multer.diskStorage({
    destination: resolve(__dirname, "..", "..", "tmp", "uploads"),
    filename: (req, file, callback) => {
      crypto.randomBytes(15, (err, res) => {
        if (err) {
          return callback(err);
        }
        return callback(null, res.toString("hex") + extname(file.originalname));
      });
    }
  }),
  s3: multers3({
    s3: new AWS.S3({
      accessKeyId: ACCESS_KEY,
      secretAccessKey: SECRET_ACCESS_KEY,
      region: DEFAULT_REGION
    }),
    bucket: BUCKET_NAME,
    contentType: multers3.AUTO_CONTENT_TYPE,
    acl: "public-read",
    key: (req, file, callback) => {
      crypto.randomBytes(15, (err, res) => {
        if (err) {
          return callback(err);
        }
        return callback(null, res.toString("hex") + extname(file.originalname));
      });
    }
  })
};

export default {
  dest: resolve(__dirname, "..", "..", "tmp", "uploads"),
  storage: storageTypes[STORAGE_TYPE],
  fileFilter: (req, file, callback) => {
    const allowedMimes = [
      "image/jpeg",
      "image/jpg",
      "image/pjpeg",
      "image/png"
    ];

    const fileExt = file.originalname.split(".");

    if (file.mimetype === "application/octet-stream") {
      file.mimetype = `image/${fileExt[fileExt.length - 1]}`;
    }

    console.log(file);

    if (allowedMimes.includes(file.mimetype)) {
      callback(null, true);
    } else {
      callback(new Error("Invalid file type"));
    }
  }
};

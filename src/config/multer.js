import aws from "aws-sdk";
import crypto from "crypto";
import multer from "multer";
import multers3 from "multer-s3";
import { extname, resolve } from "path";

const {
  BUCKET_NAME,
  STORAGE_TYPE,
  ACCESS_KEY_ID,
  SECRET_ACCESS_KEY
} = process.env;
aws.S3().config.update({
  accessKeyId: ACCESS_KEY_ID,
  secretAccessKey: SECRET_ACCESS_KEY
});

const storageTypes = {
  local: multer.diskStorage({
    destination: resolve(__dirname, "..", "..", "tmp", "uploads"),
    filename: (req, file, callback) => {
      crypto.randomBytes(15, (err, res) => {
        if (err) {
          // o parâmetro de callback do filename é usado para retornar o erro, caso tenha
          return callback(err);
        }
        // e a função chamada executarmos o nome do arquivo
        // o primeiro parâmetro é o erro
        return callback(null, res.toString("hex") + extname(file.originalname));
      });
    }
  }),
  s3: multers3({
    s3: new aws.S3(),
    bucket: BUCKET_NAME,
    contentType: multers3.AUTO_CONTENT_TYPE,
    acl: "public-read",
    key: (req, res, callback) => {
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
  limits: {
    fileSize: 2 * 1024 * 1024
  },
  fileFilter: (req, file, callback) => {
    const allowedMimes = [
      "image/jpeg",
      "image/pjpeg",
      "image/png",
      "image/gif"
    ];

    if (allowedMimes.includes(file.mimetype)) {
      callback(null, true);
    } else {
      callback(new Error("Invalid file type"));
    }
  }
};

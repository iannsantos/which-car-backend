"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _awssdk = require('aws-sdk'); var _awssdk2 = _interopRequireDefault(_awssdk);
var _crypto = require('crypto'); var _crypto2 = _interopRequireDefault(_crypto);
var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _multers3 = require('multer-s3'); var _multers32 = _interopRequireDefault(_multers3);
var _path = require('path');

const {
  BUCKET_NAME,
  STORAGE_TYPE,
  ACCESS_KEY,
  SECRET_ACCESS_KEY,
  DEFAULT_REGION
} = process.env;

const storageTypes = {
  local: _multer2.default.diskStorage({
    destination: _path.resolve.call(void 0, __dirname, "..", "..", "tmp", "uploads"),
    filename: (req, file, callback) => {
      _crypto2.default.randomBytes(15, (err, res) => {
        if (err) {
          return callback(err);
        }
        return callback(null, res.toString("hex") + _path.extname.call(void 0, file.originalname));
      });
    }
  }),
  s3: _multers32.default.call(void 0, {
    s3: new _awssdk2.default.S3({
      accessKeyId: ACCESS_KEY,
      secretAccessKey: SECRET_ACCESS_KEY,
      region: DEFAULT_REGION
    }),
    bucket: BUCKET_NAME,
    contentType: _multers32.default.AUTO_CONTENT_TYPE,
    acl: "public-read",
    key: (req, file, callback) => {
      _crypto2.default.randomBytes(15, (err, res) => {
        if (err) {
          return callback(err);
        }
        return callback(null, res.toString("hex") + _path.extname.call(void 0, file.originalname));
      });
    }
  })
};

exports. default = {
  dest: _path.resolve.call(void 0, __dirname, "..", "..", "tmp", "uploads"),
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

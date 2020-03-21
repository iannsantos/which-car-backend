"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _crypto = require('crypto'); var _crypto2 = _interopRequireDefault(_crypto);
var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _path = require('path');

exports. default = {
  storage: _multer2.default.diskStorage({
    destination: _path.resolve.call(void 0, __dirname, "..", "..", "tmp", "uploads"),
    filename: (req, file, callback) => {
      _crypto2.default.randomBytes(15, (err, res) => {
        if (err) {
          // o parâmetro de callback do filename é usado para retornar o erro, caso tenha
          return callback(err);
        }
        // e a função chamada executarmos o nome do arquivo
        // o primeiro parâmetro é o erro
        return callback(null, res.toString("hex") + _path.extname.call(void 0, file.originalname));
      });
    }
  })
};

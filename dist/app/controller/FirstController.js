"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _algorithmia = require('../services/algorithmia'); var _algorithmia2 = _interopRequireDefault(_algorithmia);

class FirstController {
  async show(req, res) {
    try {
      const { filename } = req.file;

      const input = image => `http://localhost:3333/files/${image}`;

      const response = await _algorithmia2.default.call(void 0, input(filename));

      const bestConfidence = response.result.find(
        item => item.confidence === "1.00"
      );

      return res.json(bestConfidence);
    } catch (err) {
      return res.json({ error: true, message: err.message });
    }
    // const input =
    //   "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Geneva_International_Motor_Show_2018%2C_Le_Grand-Saconnex_%281X7A0083%29.jpg/1080px-Geneva_International_Motor_Show_2018%2C_Le_Grand-Saconnex_%281X7A0083%29.jpg";
  }
}

exports. default = new FirstController();

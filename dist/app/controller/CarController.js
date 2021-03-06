"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _algorithmia = require('../services/algorithmia'); var _algorithmia2 = _interopRequireDefault(_algorithmia);

class CarController {
  async show(req, res) {
    try {
      console.log("file", req.file);

      const { location: image } = req.file;

      console.log("image", image);

      const response = await _algorithmia2.default.call(void 0, image);

      console.log("getCar: ", response.result);

      if (response.result && response.result.length >= 1) {
        const bestConfidence = response.result[0];
        return res.json(bestConfidence);
      } else {
        return res.json({ error: true, message: "Not found car" });
      }
    } catch (err) {
      return res.json({ error: true, message: err.message });
    }
  }
}

exports. default = new CarController();

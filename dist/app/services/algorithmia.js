"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _algorithmia = require('algorithmia'); var _algorithmia2 = _interopRequireDefault(_algorithmia);

 async function getCar(input) {
  const { ALGORITHMIA_API_KEY } = process.env;

  try {
    const client = _algorithmia2.default.call(void 0, ALGORITHMIA_API_KEY);
    const algorithm = "LgoBE/CarMakeandModelRecognition/0.4.7";

    const response = await client.algo(algorithm).pipe(input);

    return response;
  } catch (err) {
    console.log(err.message);
    throw new Error(err.message);
  }
} exports.default = getCar;

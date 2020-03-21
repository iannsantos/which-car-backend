"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _FirstController = require('./app/controller/FirstController'); var _FirstController2 = _interopRequireDefault(_FirstController);
var _multer3 = require('./config/multer'); var _multer4 = _interopRequireDefault(_multer3);

const routes = new (0, _express.Router)();
const upload = _multer2.default.call(void 0, _multer4.default);

routes.get("/", (_req, res) => res.json({ status: "Server is running" }));
routes.post("/car", upload.single("file"), _FirstController2.default.show);

exports. default = routes;

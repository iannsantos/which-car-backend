import { Router } from "express";
import multer from "multer";
import CarController from "./app/controller/CarController";
import multerConfig from "./config/multer";

const routes = new Router();
const upload = multer(multerConfig);

routes.get("/", (_req, res) => res.json({ status: "Server is running" }));
routes.post("/car", upload.single("file"), CarController.show);

export default routes;

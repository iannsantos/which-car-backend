import { Router } from "express";
import multer from "multer";
import FirstController from "./app/controller/FirstController";
import multerConfig from "./config/multer";

const routes = new Router();
const upload = multer(multerConfig);

routes.get("/", (_req, res) => res.json({ status: "Server is running" }));
routes.post("/car", upload.single("file"), FirstController.show);

export default routes;

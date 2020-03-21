import crypto from "crypto";
import multer from "multer";
import { extname, resolve } from "path";

export default {
  storage: multer.diskStorage({
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
  })
};

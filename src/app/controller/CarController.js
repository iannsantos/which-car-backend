import getCar from "../services/algorithmia";

class CarController {
  async show(req, res) {
    try {
      console.log("file", req.file);

      const { location: image } = req.file;

      console.log("image", image);

      const response = await getCar(image);

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

export default new CarController();

import getCar from "../services/algorithmia";

class FirstController {
  async show(req, res) {
    const { APP_URL, STORAGE_TYPE, STORAGE_URL } = process.env;
    try {
      const { filename } = req.file;

      let input;

      if (STORAGE_TYPE === "local") {
        input = image => `${APP_URL}/files/${image}`;
      } else if (STORAGE_TYPE === "s3") {
        input = image => `${STORAGE_URL}/${image}`;
      }

      const response = await getCar(input(filename));

      if (response.result.length >= 1) {
        const bestConfidence = response.result.find(
          item => item.confidence === "1.00"
        );

        return res.json(bestConfidence);
      } else {
        return res.json({ error: true, message: "Not found car" });
      }
    } catch (err) {
      return res.json({ error: true, message: err.message });
    }
  }
}

export default new FirstController();

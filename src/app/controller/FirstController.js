import getCar from "../services/algorithmia";

class FirstController {
  async show(req, res) {
    const { APP_URL } = process.env;
    try {
      const { filename } = req.file;

      const input = image => `${APP_URL}/files/${image}`;

      const response = await getCar(input(filename));

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

export default new FirstController();

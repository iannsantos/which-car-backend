import algorithmia from "algorithmia";

export default async function getCar(input) {
  const { ALGORITHMIA_API_KEY } = process.env;

  try {
    const client = algorithmia(ALGORITHMIA_API_KEY);
    const algorithm = "LgoBE/CarMakeandModelRecognition/0.4.7";

    const response = await client.algo(algorithm).pipe(input);

    return response;
  } catch (err) {
    console.log(err.message);
    throw new Error(err.message);
  }
}

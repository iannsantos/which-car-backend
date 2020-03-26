<h1 align="center">
  <img src="assets/car.png" alt="car question" width="120">
<br>
WhichCar - Backend
</h1>

<p align="center">This is a backend of the <a target="_blank" href="https://github.com/iannsantos/which-car-mobile">WhichCar mobile app</a>.</p>
<p align="center">The server is host on <a target="_blank" href="https://heroku.com">Heroku</a> and save images on the <a target="_blank" href="https://aws.amazon.com/pt/s3/">Amazon S3</a> to send link to <a href="rithmia.com/algorithms/LgoBE/CarMakeandModelRecognition" target="_blank">Algorithmia API</a> and get informations of the car.</p>

<p align="center">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License MIT">
  </a>
</p>

<hr />

## Features
This app features all the latest tools and practices in development!

- **Node.js** — Node.js is an open-source, cross-platform, JavaScript runtime environment.
- **Express** — Fast, unopinionated, minimalist web framework for Node.js
- **Multer** — Node.js middleware for handling 'multipart/form-data'.
- **Algorithmia** — Algorithmia makes applications smarter, by building a community around algorithm development.
- **Amazon S3** — Store data in the cloud and learn key bucket and object concepts with the Amazon S3 web service.

## Getting started
1. Clone this repository:
```
git clone https://github.com/iannsantos/which-car-backend
```
2. Open the project folder in terminal (or CMD on Windows) and run some command below:

With Yarn:
```
yarn
```
With NPM:
```
npm install
```
3. Open the code in your favorite editor (I recommend VSCode).
4. Copy the .env.example to .env and insert your keys.
5. If you already have Docker Compose, run:
```
docker-compose up
```
6. If you don't have Docker Compose, run:
With Yarn:
```
yarn dev
```
With NPM:
```
npm run dev
```
7. Now, you are ready!

## Endpoints
This server provide just 2 endpoints
```
GET <URL>/ => Server status
POST <URL>/car => Send image and show informations of the car.
```
Test endpoints in Insomnia

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=WhichCar&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fiannsantos%2Fwhich-car-backend%2Fmaster%2Finsomnia_button.json)

## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) page for details.

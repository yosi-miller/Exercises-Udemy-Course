import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3025;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  const { street, pet } = req.body;
  res.send(
    `<h1>Thank you for your submission!</h1> <p>Your address is ${street} and your pet is ${pet}</p>`
  );
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

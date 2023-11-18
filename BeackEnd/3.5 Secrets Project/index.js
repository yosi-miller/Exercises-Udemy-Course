//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

// יש אפשרות לבאג אם יהיה עוד אופציות באתר ויוקש קוד לא תקין אז תמיד יחזור 
// איך אפשר לדעת לאיזה מתווך הוא יחזור ואם יש עוד מתווכים אז זה יחזור לאחרון שהוגדר?

const app = express();
const port = 3021;

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

function checkPassword(req, res, next) {
  if (req.body.password === "ILoveProgramming") {
    next();
  } else {
    res.sendFile(__dirname + "/public/index.html");
  }
}

app.use(checkPassword);

app.post("/check", (req, res) => {
  res.sendFile(__dirname + "/public/secret.html");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

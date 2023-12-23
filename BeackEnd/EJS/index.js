import express from "express";

const app = new express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

let day = new Date().getDay();
let title = "";
const days = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};

if (day === 0) {
  title = `Today is ${days[day]}, good Shabbos`;
} else {
    title = `Today is ${days[day]}, go to work!`;
    console.log(days[day]);
}

app.get("/day", (req, res) => {
  res.render("index.ejs", { Day: title });
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});

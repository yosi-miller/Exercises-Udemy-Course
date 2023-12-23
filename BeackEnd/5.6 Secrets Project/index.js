// HINTS:
// 1. Import express and axios
import express from "express";
import axios from "axios";

// 2. Create an express app and set the port number.
const app = express();
const port = 3001;

// 3. Use the public folder for static files.
app.use(express.static("public"));

// 4. When the user goes to the home page it should render the index.ejs file.
app.get("/", async (req, res) => {
  try {
    const result = await axios.get("https://secrets-api.appbrewery.com/random");
    const { secret, username } = result.data;
    res.render("index.ejs", { secret: secret, user: username });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

// res.render('index.ejs', { secret: 'secret', user: 'username' });
// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.
// "https://secrets-api.appbrewery.com/random"

// 6. Listen on your predefined port and start the server.
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

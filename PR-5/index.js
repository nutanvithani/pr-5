const express = require("express");
const connect = require("./config/db");
const movieRoute = require("./routes/movie.route");
const userRoute = require("./routes/user.route");

const app = express();
app.use(express.json());

app.use("/user", userRoute);
app.use("/movie", movieRoute);

app.get("/", (req, res) => {
  res.send("Welcome to the movie API");
});

app.listen(8090, () => {
  connect();
  console.log("listening on port 8090");
});
  
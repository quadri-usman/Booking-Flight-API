const express = require("express");
const { json } = require("express"),
  bodyParser = require("body-parser");
const flight = require("./routes/flightRoute");
const { PORT } = process.env;
const app = express();

app.use(json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/flight", flight);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

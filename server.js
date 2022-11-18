require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

const app = express();

//middleware
app.use(morgan("dev"));
app.use(express.json);

// routes

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is up and listening on port ${port}`);
});

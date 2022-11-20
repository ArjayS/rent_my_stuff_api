require("dotenv").config();
const express = require("express");
const database = require("./db");

const app = express();
const morgan = require("morgan");

// MIDDLEWARE
app.use(morgan("dev"));
app.use(express.json());

// ROUTES

const itemRoutes = require("./router/Items");
const itemRouter = express.Router();
itemRoutes(itemRouter, database);
app.use("/api/items", itemRouter);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is up and listening on port ${port}`);
});

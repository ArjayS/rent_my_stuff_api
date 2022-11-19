require("dotenv").config();
const express = require("express");
const db = require("./db");

const app = express();
const morgan = require("morgan");

// //middleware
app.use(morgan("dev"));
app.use(express.json());

// // routes

// Get all items
app.get("/api/items", async (req, res) => {
  const results = await db.query("SELECT * FROM items");
  console.log(results);

  res.status(200).json({
    status: "success",
    data: {
      items: ["stapler", "pen"],
    },
  });
});

// Get an item
app.get("/api/item/:id", (req, res) => {
  console.log(req.params);

  res.status(200).json({
    status: "success",
    data: {
      items: "stapler",
    },
  });
});

// Create an item
app.post("/api/items", (req, res) => {
  console.log(req.body);

  res.status(201).json({
    status: "success",
    data: {
      items: "stapler",
    },
  });
});

// Update an item
app.put("/api/item/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.body);

  res.status(200).json({
    status: "success",
    data: {
      items: "scissors",
    },
  });
});

// Delete an item
app.delete("/api/item/:id", (req, res) => {
  res.status(204).json({
    status: "success",
  });
});

// // /api/units
// // /api/users

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is up and listening on port ${port}`);
});

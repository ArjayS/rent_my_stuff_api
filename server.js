require("dotenv").config();
const express = require("express");
const database = require("./db");

// const fs = require("fs");
// const path = require("path");

const app = express();
const morgan = require("morgan");

// MIDDLEWARE
app.use(morgan("dev"));
app.use(express.json());

// // Function to be able to "read(file)". This is a setup function for /api/debug/reset.
// function read(file) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(
//       file,
//       {
//         encoding: "utf-8",
//       },
//       (error, data) => {
//         if (error) return reject(error);
//         resolve(data);
//       }
//     );
//   });
// }

// ROUTES

// Items Routes, CONNECTED through -> ./router/Items.js
const itemRoutes = require("./router/Items");
const db = require("./db");
const itemRouter = express.Router();
itemRoutes(itemRouter, database);
app.use("/api/items", itemRouter);

// // Attempt to Reset Database -> http://localhost:3005/api/debug/reset
// module.exports = function () {
//   Promise.all([
//     read(path.resolve(__dirname, `./db/schema/create.sql`)),
//     read(path.resolve(__dirname, `./db/seeds/seeding.sql`)),
//   ])
//     .then(([create, seed]) => {
//       app.get("/api/debug/reset", (request, response) => {
//         database
//           .query(create)
//           .then(() => database.query(seed))
//           .then(() => {
//             console.log("Database Reset");
//             response.status(200).send("Database Reset");
//           });
//       });
//     })
//     .catch((error) => {
//       console.log(`Error setting up the reset route: ${error}`);
//     });

//   app.close = function () {
//     return db.end();
//   };

//   return app;
// };

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is up and listening on port ${port}`);
});

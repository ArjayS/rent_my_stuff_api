require("dotenv").config();
const express = require("express");
const cors = require("cors");
const database = require("./db");

// const fs = require("fs");
// const path = require("path");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const app = express();
const morgan = require("morgan");

// MIDDLEWARE
app.use(morgan("dev"));
app.use(express.json());
// app.use(cors());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: "RentMyStuff",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 3600000,
    },
  })
);

app.use((req, res, next) => {
  console.log(req.session);
  next();
});

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
const itemsRoutes = require("./router/Items");
const itemsRouter = express.Router();
itemsRoutes(itemsRouter, database);
app.use("/api/items", itemsRouter);

// Users Routes, CONNECTED through -> ./router/Users.js
const usersRoutes = require("./router/Users");
const usersRouter = express.Router();
usersRoutes(usersRouter, database);
app.use("/api/users", usersRouter);

// Reservations Routes, CONNECTED through -> ./router/Reservations.js
const reservationsRoutes = require("./router/Reservations");
const reservationsRouter = express.Router();
reservationsRoutes(reservationsRouter, database);
app.use("/api/reservations", reservationsRouter);

// userReviews Routes, CONNECTED through -> ./router/UserReviews.js
const userReviewsRoutes = require("./router/UserReviews");
const userReviewsRouter = express.Router();
userReviewsRoutes(userReviewsRouter, database);
app.use("/api/userreviews", userReviewsRouter);

// itemReviews Routes, CONNECTED through -> ./router/ItemReviews.js
const itemReviewsRoutes = require("./router/ItemReviews");
const itemReviewsRouter = express.Router();
itemReviewsRoutes(itemReviewsRouter, database);
app.use("/api/itemreviews", itemReviewsRouter);

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

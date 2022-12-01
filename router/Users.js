module.exports = function (router, db) {
  // 7. Getting all users
  router.get("/", async (req, res) => {
    try {
      const results = await db.query(
        "SELECT * FROM users LEFT JOIN (SELECT guest_id, COUNT(*) as total_rent_count, TRUNC(AVG(rent_worthy),1) as rent_trustworthiness FROM user_reviews GROUP BY guest_id) user_reviews ON users.id = user_reviews.guest_id"
      );

      console.log(results);

      res.status(200).json({
        status: "Successfully getting all users!",
        results: results.rows.length,
        data: {
          users: results.rows,
        },
      });
    } catch (error) {
      console.log(error);
    }
  });

  // 8. Getting a user -> :id is based on users.id
  router.get("/:id", async (req, res) => {
    try {
      const results = await db.query(
        "SELECT * FROM users LEFT JOIN (SELECT guest_id, COUNT(*) as total_rent_count, TRUNC(AVG(rent_worthy),1) as rent_trustworthiness FROM user_reviews GROUP BY guest_id) user_reviews ON users.id = user_reviews.guest_id WHERE id = $1",
        [req.params.id]
      );

      console.log(results);

      res.status(200).json({
        status: "Successfully getting the user!",
        data: {
          user: results.rows[0],
        },
      });
    } catch (error) {
      console.log(error);
    }
  });

  //Getting items owned by user
  router.get("/:id/items", async (req, res) => {
    try {
      const results = await db.query(
        "SELECT * FROM items WHERE owner_id = $1;",
        [req.params.id]
      );
      res.status(200).json({
        status: "Successfully getting the user items!",
        data: {
          items: results.rows,
        },
      });
    } catch (error) {
      console.log(error);
    }
  });

  //Getting items rented by user
  router.get("/:id/rented", async (req, res) => {
    try {
      const results = await db.query(
        "SELECT reservations.*, items.id, items.item_name, items.item_image, items.item_description FROM reservations JOIN items ON reservations.item_id=items.id WHERE reservations.guest_id = $1;",
        [req.params.id]
      );
      res.status(200).json({
        status: "Successfully getting the user items!",
        data: {
          items: results.rows,
        },
      });
    } catch (error) {
      console.log(error);
    }
  });

  // (Register) Creating a new user
  router.post("/register", async (req, res) => {
    try {
      const results = await db.query(
        "INSERT INTO users (user_name, user_email, user_password, user_image) VALUES ($1, $2, $3, $4) RETURNING *",
        [
          req.body.user_name,
          req.body.user_email,
          req.body.user_password,
          req.body.user_image,
        ]
      );
      res.status(201).json({
        status: "Successfully getting all items",
        results: results.rows.length,
        data: {
          user: results.rows,
        },
      });
    } catch (error) {
      console.log(error);
    }
  });

  // (Logging In) Accessing an existing user
  router.post("/login", async (req, res) => {
    try {
      const results = await db.query(
        "SELECT * FROM users WHERE user_email = $1 AND user_password = $2",
        [req.body.user_email, req.body.user_password]
      );

      if (results.rows.length > 0) {
        res.status(201).send(results.rows[0]);
      } else {
        res.send({ message: "Wrong username/password combination!" });
      }
    } catch (error) {
      console.log(error);
    }
  });

  return router;
};

// Getting the specific item rating, base price and bid price by a renter
// SELECT * FROM items LEFT JOIN (SELECT item_id, COUNT(*)as total_rent_count, TRUNC(AVG(item_rating),1) as average_rating FROM item_reviews group by item_id) item_reviews ON items.id = item_reviews.item_id RIGHT JOIN (SELECT item_id, rsrv_price_bid FROM reservations) reservations ON items.id = reservations.item_id

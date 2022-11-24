module.exports = function (router, db) {
  // 13. Getting a user review for a renter -> :id is based on user_reviews.guest_id
  router.get("/renter/:id", async (req, res) => {
    try {
      const results = await db.query(
        "SELECT * FROM user_reviews LEFT JOIN (SELECT id, user_name AS owner_name, user_image AS owner_image FROM users GROUP BY id) users ON users.id = user_reviews.owner_id RIGHT JOIN (SELECT id, item_name, item_base_price, item_image, item_id, rsrv_price_bid FROM items LEFT JOIN (SELECT item_id, rsrv_price_bid FROM reservations) reservations ON items.id = reservations.item_id) items ON items.id = user_reviews.item_id WHERE guest_id = $1",
        [req.params.id]
      );

      console.log(results);

      res.status(200).json({
        status: "Successfully got the user reviews!",
        results: results.rows.length,
        data: {
          userReviews: results.rows,
        },
      });
    } catch (error) {
      console.log(error);
    }
  });

  // 14. Creating a new user review based on renter -> :id is based on user_reviews.guest_id
  router.post("/renter/:id", async (req, res) => {
    try {
      const results = await db.query(
        "INSERT INTO user_reviews (guest_id, owner_id, item_id, rent_worthy, rent_message) VALUES ($1, $2, $3, $4, $5) RETURNING *",
        [
          req.params.id,
          req.body.owner_id,
          req.body.item_id,
          req.body.rent_worthy,
          req.body.rent_message,
        ]
      );

      console.log(results);

      res.status(201).json({
        status: "Successfully created a renter review!",
        data: {
          user: results.rows[0],
        },
      });
    } catch (error) {
      console.log(error);
    }
  });

  return router;
};

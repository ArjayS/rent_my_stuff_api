module.exports = function (router, db) {
  // Getting an item review
  router.get("/stuff/:id", async (req, res) => {
    try {
      const results = await db.query(
        "SELECT * FROM item_reviews LEFT JOIN (SELECT id, user_name, user_image FROM users) users ON users.id = item_reviews.guest_id WHERE item_id = $1",
        [req.params.id]
      );

      console.log(results);

      res.status(200).json({
        status: "Successfully got the user reviews!",
        results: results.rows.length,
        data: {
          itemReviews: results.rows,
        },
      });
    } catch (error) {
      console.log(error);
    }
  });

  // Creating a new item review based on item
  router.post("/stuff/:id", async (req, res) => {
    try {
      const results = await db.query(
        "INSERT INTO item_reviews (guest_id, item_id, item_rating, item_message) VALUES ($1, $2, $3, $4) RETURNING *",
        [
          req.body.guest_id,
          req.params.id,
          req.body.item_rating,
          req.body.item_message,
        ]
      );

      console.log(results);

      res.status(200).json({
        status: "Successfully created an item review!",
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

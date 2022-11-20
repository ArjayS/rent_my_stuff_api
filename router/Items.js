module.exports = function (router, db) {
  // Getting all items
  router.get("/", async (req, res) => {
    try {
      const results = await db.query("SELECT * FROM items");

      console.log(results);

      res.status(200).json({
        status: "success",
        results: results.rows.length,
        data: {
          items: results.rows,
        },
      });
    } catch (error) {
      console.log(error);
    }
  });

  // Getting an item
  router.get("/item/:id", async (req, res) => {
    try {
      const results = await db.query("SELECT * FROM items WHERE id = $1", [
        req.params.id,
      ]);

      console.log(results);

      res.status(200).json({
        status: "success",
        data: {
          items: results.rows[0],
        },
      });
    } catch (error) {
      console.log(error);
    }
  });

  // Creating an item
  router.post("/", async (req, res) => {
    try {
      const results = await db.query(
        "INSERT INTO items (owner_id, title, location, status, item_image, description) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
        [
          req.body.owner_id,
          req.body.title,
          req.body.location,
          req.body.status,
          req.body.item_image,
          req.body.description,
        ]
      );

      console.log(results);

      res.status(201).json({
        status: "success",
        data: {
          items: results.rows[0],
        },
      });
    } catch (error) {
      console.log(error);
    }
  });

  // Updating an item
  router.put("/item/:id", async (req, res) => {
    try {
      const results = await db.query(
        "UPDATE items SET owner_id = $1, title = $2, location = $3, status = $4, item_image = $5, description = $6 WHERE id = $7 RETURNING *",
        [
          req.body.owner_id,
          req.body.title,
          req.body.location,
          req.body.status,
          req.body.item_image,
          req.body.description,
          req.params.id,
        ]
      );

      console.log(results);

      res.status(200).json({
        status: "success",
        data: {
          items: results.rows[0],
        },
      });
    } catch (error) {
      console.log(error);
    }
  });

  // Deleting an item
  router.delete("/item/:id", async (req, res) => {
    try {
      const results = await db.query("DELETE FROM items WHERE id = $1", [
        req.params.id,
      ]);

      console.log(results);

      res.status(204).json({
        status: "success",
      });
    } catch (error) {
      console.log(error);
    }
  });

  return router;
};

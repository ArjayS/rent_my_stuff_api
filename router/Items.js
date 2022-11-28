module.exports = function (router, db) {
  // 1. Getting all items
  router.get("/", async (req, res) => {
    try {
      const results = await db.query(
        "SELECT * FROM items LEFT JOIN (SELECT item_id, COUNT(*), TRUNC(AVG(item_rating),1) as average_rating FROM item_reviews group by item_id) item_reviews ON items.id = item_reviews.item_id"
      );

      console.log(results);

      res.status(200).json({
        status: "Successfully getting all items",
        results: results.rows.length,
        data: {
          items: results.rows,
        },
      });
    } catch (error) {
      console.log(error);
    }
  });

  // 2. Getting an item -> :id is based on items.id
  router.get("/:id/item", async (req, res) => {
    try {
      const results = await db.query(
        "SELECT * FROM items LEFT JOIN (SELECT item_id, COUNT(*), TRUNC(AVG(item_rating),1) AS average_rating FROM item_reviews group by item_id) item_reviews ON items.id = item_reviews.item_id RIGHT JOIN (SELECT id AS owner_id, user_name AS owner_name FROM users) users ON items.owner_id = users.owner_id WHERE items.id = $1",
        [req.params.id]
      );

      console.log(results);

      res.status(200).json({
        status: "Successfully getting the item",
        data: {
          item: results.rows[0],
        },
      });
    } catch (error) {
      console.log(error);
    }
  });

  // 3. Creating an item
  router.post("/", async (req, res) => {
    try {
      const results = await db.query(
        "INSERT INTO items (owner_id, item_name, item_location,item_base_price, item_status, item_image, item_description) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
        [
          req.body.owner_id,
          req.body.item_name,
          req.body.item_location,
          req.body.item_base_price,
          req.body.item_status,
          req.body.item_image,
          req.body.item_description,
        ]
      );

      console.log(results);

      res.status(201).json({
        status: "Successfully added/created a new item",
        data: {
          item: results.rows[0],
        },
      });
    } catch (error) {
      console.log(error);
    }
  });

  router.get("/new", async (req, res) => {
    try {
      res.status(201).json({
        status: "Successfully added/created a new item",
        data: {
          item: results.rows[0],
        },
      });
    } catch (error) {
      console.log(error);
    }
  });

  // 4. Updating an item -> :id is based on items.id
  router.put("/:id/item", async (req, res) => {
    try {
      const results = await db.query(
        "UPDATE items SET owner_id = $1, item_name= $2, item_location = $3, item_base_price = $4, item_status = $5, item_image = $6, item_description = $7 WHERE id = $8 RETURNING *",
        [
          req.body.owner_id,
          req.body.item_name,
          req.body.item_location,
          req.body.item_base_price,
          req.body.item_status,
          req.body.item_image,
          req.body.item_description,
          req.params.id,
        ]
      );

      console.log(results);

      res.status(200).json({
        status: "Successfully update/ edit the item",
        data: {
          item: results.rows[0],
        },
      });
    } catch (error) {
      console.log(error);
    }
  });

  // 5. Testing patch route, it works! confirmed in postman! Changing only the status of an item -> :id is based on items.id
  router.patch("/:id/item", async (req, res) => {
    try {
      const results = await db.query(
        "UPDATE items SET item_status = $1 WHERE id = $2 RETURNING *",
        [req.body.item_status, req.params.id]
      );

      console.log(results);

      res.status(200).json({
        status: "Successfully update/ edit the item status",
        data: {
          item: results.rows[0],
        },
      });
    } catch (error) {
      console.log(error);
    }
  });

  // 6. Deleting an item -> :id is based on items.id
  router.delete("/:id/item", async (req, res) => {
    try {
      const results = await db.query(
        "DELETE FROM items WHERE id = $1 RETURNING *",
        [req.params.id]
      );

      console.log(results);

      res.status(204).json({
        status: "Successfully deleted/remove the item",
        data: {
          item: results.rows[0],
        },
      });
    } catch (error) {
      console.log(error);
    }
  });

  //7. Getting all the bids of an item
  router.get("/:id/bids", async (req, res) => {
    try {
      const results = await db.query(
        "SELECT reservations.*, items.id, items.item_image, items.item_name, items.item_base_price FROM reservations JOIN items ON reservations.item_id=items.id WHERE reservations.item_id = $1",
        [req.params.id]
      );

      console.log(results);

      res.status(200).json({
        status: "Successfully getting the item",
        data: {
          item: results.rows,
        },
      });
    } catch (error) {
      console.log(error);
    }
  });

  return router;
};

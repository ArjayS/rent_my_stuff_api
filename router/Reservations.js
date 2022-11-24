module.exports = function (router, db) {
  // 9. Getting all reservations for a specific item for owners to see the request by other potential renters -> The id here is based on the item_id
  router.get("/reserve/:id", async (req, res) => {
    try {
      const results = await db.query(
        "SELECT * FROM reservations WHERE item_id = $1",
        [req.params.id]
      );

      console.log(results);

      res.status(200).json({
        status: "Successfully got all reservations",
        results: results.rows.length,
        data: {
          reservations: results.rows,
        },
      });
    } catch (error) {
      console.log(error);
    }
  });

  // 10. Creating an reservation request. This will be made by the renter -> The id here is based on the item_id
  router.post("/reserve/:id", async (req, res) => {
    try {
      const results = await db.query(
        "INSERT INTO reservations (guest_id, item_id, rsrv_start_date, rsrv_end_date, rsrv_price_bid) VALUES ($1, $2, $3, $4, $5) RETURNING *",
        [
          req.body.guest_id,
          req.params.id,
          req.body.rsrv_start_date,
          req.body.rsrv_end_date,
          req.body.rsrv_price_bid,
        ]
      );

      console.log(results);

      res.status(201).json({
        status: "Successfully added/created a new reservation for the item",
        data: {
          item: results.rows[0],
        },
      });
    } catch (error) {
      console.log(error);
    }
  });

  // 11. Changing only the rsrv_approval based on owners approval of who he chose to rent the item -> The :id is based on the reservation.id
  router.patch("/reserve/:id/approve", async (req, res) => {
    try {
      const results = await db.query(
        "UPDATE reservations SET rsrv_approval = $1 WHERE id = $2 RETURNING *",
        [req.body.rsrv_approval, req.params.id]
      );

      console.log(results);

      res.status(200).json({
        status: "Successfully update/ edit the reservation approval status",
        data: {
          item: results.rows[0],
        },
      });
    } catch (error) {
      console.log(error);
    }
  });

  // 12. Changing only the rsrv_date_returned when the renter returns the item back to owner -> The :id here is based on the reservation.id
  router.patch("/reserve/:id/datereturned", async (req, res) => {
    try {
      const results = await db.query(
        "UPDATE reservations SET rsrv_date_returned = $1 WHERE id = $2 RETURNING *",
        [req.body.rsrv_date_returned, req.params.id]
      );

      console.log(results);

      res.status(200).json({
        status: "Successfully update/ edit the date returned",
        data: {
          item: results.rows[0],
        },
      });
    } catch (error) {
      console.log(error);
    }
  });

  return router;
};

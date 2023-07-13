const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");
const PORT = process.env.PORT || 5000; 

// GET Route
router.get("/", (req, res) => {
  const queryText = `SELECT * FROM "weekend_gallery" ORDER BY id;`;
  pool
    .query(queryText)
    .then((result) => {
      console.log(`Database query successful`, result);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlQuery}`, error);
      res.sendStatus(500);
    });
}); // END GET Route

// POST Route
router.post("/", (req, res) => {
  const alt = req.body.alt;
  const path = req.body.path;
  const description = req.body.description;

  const queryText = `INSERT INTO "weekend_gallery" (alt, path, description)
  VALUES ($1, $2, $3);`;

  pool
    .query(queryText, [alt, path, description])
    .then((result) => {
      console.log("Added item to database", result);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log("Error adding item to database", error);
      res.sendStatus(500);
    });
}); // END POST Route

// PUT Route
router.put("/:id", (req, res) => {
  const galleryId = req.params.id;
  let queryText = `UPDATE "weekend_gallery" SET "likes" = "likes" + 1 WHERE "id" = 
$1;`;
  pool
    .query(queryText, [galleryId])
    .then((result) => {
      console.log("Updated item on database", result);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("Error in updating item ", error);
      res.sendStatus(500);
    });
}); // END PUT Route

// DELETE route
router.delete("/:id", (req, res) => {
  const idToDelete = req.params.id;
  let queryText = `DELETE from "weekend_gallery" WHERE "id"=$1;`;
  pool
    .query(queryText, [idToDelete])
    .then((result) => {
      console.log("Deleted item from database", result);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("Error with deleting item", error);
      res.sendStatus(500);
    });
}); // END DELETE Route

module.exports = router;

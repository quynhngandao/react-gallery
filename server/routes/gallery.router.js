const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put("/:id", (req, res) => {
  console.log(req.params);
  const galleryId = req.params.id;
  let queryText = `UPDATE "weekend_gallery" SET "likes" = "likes" + 1 WHERE "id" = 
$1;`;
  pool
    .query(queryText, [galleryId])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("Error in updating task ", error);
      res.sendStatus(500);
    });

  // for(const galleryItem of galleryItems) {
  //     if(galleryItem.id == galleryId) {
  //         galleryItem.likes += 1;
  //     }
  // }
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    const sqlQuery = `SELECT * FROM "weekend_gallery" ORDER BY id;`;
    pool.query(sqlQuery)
    .then((result) => {
        // console logging out result received from server
        console.log(`Database query successful`, result);
        res.send(result.rows);
    })
    .catch((error) => {
        // console logging out any errors that arise 
        console.log(`Error making database query ${sqlQuery}`, error);
        res.sendStatus(500);
    })
}) // END GET Route
module.exports = router;

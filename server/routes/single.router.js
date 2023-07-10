const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");
const multer = require("multer");

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '--' + file.originalname);
  },
});
const upload = multer({ storage: fileStorageEngine });

router.post("/", upload.single("image"), (req, res) => {
  const { alt, description } = req.body;
  const imagePath = req.file.filename;
    const queryText = `INSERT INTO "weekend_gallery" (alt, path, description) VALUES ($1, $2, $3);`;
  pool
    .query(queryText, [alt, imagePath, description])
    .then((result) => {
      console.log('req.file', req.file);
      console.log('req.body', req.body);
      console.log("Added item to database", result);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log("Error adding item to database", error);
      res.sendStatus(500);
    });
});

module.exports = router;

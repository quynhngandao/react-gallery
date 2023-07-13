const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");
const multer = require("multer");
router.use(express.static(__dirname + "public"));
router.use("/images", express.static("images"));

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    // specify the directory to save the uploaded files
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: fileStorageEngine });

router.post("/", upload.single("image"), function (req, res, next) {
  // req.body will hold the text fields
  const { alt, description } = req.body;

  // req.file is the `image` file
  console.log("req.file", req.file);

  const queryText = `INSERT INTO "weekend_gallery" (alt, description) VALUES ($1, $2);`;
  pool
    .query(queryText, [alt, description])
    .then((response) => {
      res.status(201);
      console.log("Added item to database", response);
    })
    .catch((error) => {
      console.log("Error adding item to database", error);
      res.sendStatus(500);
    });
});

module.exports = router;

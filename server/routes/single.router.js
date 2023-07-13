const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");
// use multer for files upload
const multer = require("multer");
// Serve static files from the "public" directory
router.use(express.static(__dirname + "public"));
// Serve files from the "images" directory under the "/images" route
router.use("/images", express.static("images"));
// Configure multer disk storage
const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    // specify the directory to save the uploaded files
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
     // Use the original name of the file as the filename
    cb(null, file.originalname);
  },
});

// Create multer instance with the configured storage engine
const upload = multer({ storage: fileStorageEngine });

// POST for uploading image
router.post("/", upload.single("image"), function (req, res, next) {
  // already have POST in gallery router so don't need to insert other data, only upload images
  // req.file is the "image" file
  // image:file
  console.log("req.file", req.file);
  // indicate successful upload
  res.status(200).json({ message: "Image uploaded successfully" });
});

module.exports = router;

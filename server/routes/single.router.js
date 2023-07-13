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
  // already have POST in gallery router so don't need to insert other data, only upload images
  console.log("req.file", req.file);

});

module.exports = router;

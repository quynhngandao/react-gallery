const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const gallery = require("./routes/gallery.router.js");
const single = require('./routes/single.router.js')
const cors = require('cors')
const PORT = process.env.PORT || 5000;


/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(express.static("build"));
app.use(cors())


/** ---------- EXPRESS ROUTES ---------- **/
app.use("/gallery", gallery);
app.use("/single", single);

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
  console.log("Listening on port: ", PORT);
});

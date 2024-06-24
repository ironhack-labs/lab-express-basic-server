const router = require("express").Router();
const path = require("path");
router.get("/", (req, res, next) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, "..", "views", "home.html"));
});

module.exports = router;

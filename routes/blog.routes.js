const router = require("express").Router();
const path = require("path");
router.get("/blog", (req, res, next) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, "..", "views", "blog.html"));
});

module.exports = router;

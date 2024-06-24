const router = require("express").Router();
const path = require("path");
router.get("/", (req, res, next) => {
  console.log(__dirname);
  res.json(path.join(__dirname, "data", "projects.json"));
});

module.exports = router;

const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("./index.ejs");
});

router.use("/new", require("./fetch.js"));

module.exports = router;
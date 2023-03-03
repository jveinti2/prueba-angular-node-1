const { Router } = require("express");
const router = Router();

//routes
router.get("/", (req, res) => {
  res.send({ text: "Home page" });
});

module.exports = router;

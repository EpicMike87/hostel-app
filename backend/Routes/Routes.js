const express = require("express");
const router = express.Router();
const controller = require("../Controllers/Controllers");
const passport = require("passport");

router.get(
  "/appData",
  passport.authenticate("jwt", { session: false }),
  controller.displayAppData
);
router.post("/login", controller.processLogin);
router.post("/register", controller.processNewUser);

router.use(function (req, res) {
  res.status(404);
  res.type("text/plain");
  res.send("404 Not found.");
});

router.use(function (err, req, res, next) {
  res.status(500);
  res.type("text/plain");
  res.send("Internal Server Error.");
});

module.exports = router;

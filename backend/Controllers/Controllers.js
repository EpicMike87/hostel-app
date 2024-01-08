const utils = require("../lib/utils");
const db = require("../config/users");

exports.newList = function (req, res) {
  menu.init();
  res.redirect("/");
};

// Process to handle user log ins

exports.processLogin = function (req, res, next) {
  db.findOne({ username: req.body.username }, { _id: 1 }, function (err, user) {
    if (!user) {
      res.status(401).json({ success: false, msg: "could not find user" });
    }
    console.log(user);
    if (user) {
      const isValid = utils.validPassword(
        req.body.password,
        user.hash,
        user.salt
      );
      if (isValid) {
        const tokenObject = utils.issueJWT(user);
        res.status(200).json({
          success: true,
          token: tokenObject.token,
          expiresIn: tokenObject.expires,
          username: user.username,
        });
      } else {
        res
          .status(401)
          .json({ success: false, msg: "you entered the wrong password" });
      }
    }
  });
};
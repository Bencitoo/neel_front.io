const express = require("express");
const router = express.Router();
const {
  signup,
  signin,
  requireSignin,
} = require("../controllers/userController");
const { check } = require("express-validator");

router.post(
  "/signup",
  [
    check("username").isEmpty().withMessage("Username is required"),
    check("email").isEmail().withMessage("Valid Email is required"),
    check("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  signup
);

router.post("/signin", signin);

router.post("/profile", requireSignin, (request, response) => {
  response.status(200).json({ user: "profile" });
});

module.exports = router;

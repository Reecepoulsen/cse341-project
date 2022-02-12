const express = require("express");
const router = express.Router();

const { check } = require("express-validator");

const controllerTA06 = require("../controllers/controllerTA06");

router.get("/", controllerTA06.getIndex);

router.get("/register", controllerTA06.getRegister);

router.get("/login", controllerTA06.getLogin);

router.post(
  "/register",
  [
    check("email", "Please enter a valid email")
      .isEmail()
      .normalizeEmail()
      .trim(),
    check(
      "password",
      "Password has to 5 characters long and include only letters or numbers."
    )
      .isAlphanumeric()
      .isLength({ min: 5 })
      .trim(),
  ],
  controllerTA06.postRegister
);

router.post(
  "/login",
  [
    check("email", "Please enter a valid email")
      .isEmail()
      .normalizeEmail()
      .trim(),
    check("password", "Incorrect password")
      .isAlphanumeric()
      .isLength({ min: 5 })
      .trim(),
  ],
  controllerTA06.postLogin
);

router.post("/logout", controllerTA06.postLogout);

module.exports = router;

const express = require("express");
const router = express.Router();
const authController = require("./auth.cotroller");

router.route("/login").post(authController.userAuthenticate);
router.route("/register").post(authController.userRegister);
router.route("/forgot-password").post(authController.forgotPassword);
router.route("/verify-user/:email").post(authController.verifyUserToken);
router.route("/verify-token/:email").post(authController.verifyToken);
router.route("/changepassword/:email").put(authController.changePassword);
router.route("/cpassword/:email").put(authController.cPassword);

module.exports = router;

const router = require("express").Router();
const userRoute = require("../modules/user/user.route");
const categoryRoute = require("../modules/category/category.route");
const supplierRoute = require('../modules/supplier/supplier.route');
const authRoute = require("../modules/auth/auth.route");
//const authorize = require("./../middlewares/authorize");

const authorize = require("./../middlewares/authorize");
const notificationRoute = require("../modules/notification/notification.route");


router.use("/user", userRoute);
router.use("/category", categoryRoute);
router.use ('/supplier', supplierRoute)
router.use("/auth", authRoute);
router.use("/notification", notificationRoute);


module.exports = router;

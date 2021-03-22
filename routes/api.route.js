const router = require("express").Router();
const userRoute = require("../modules/user/user.route");
const categoryRoute = require("../modules/category/category.route");
const authRoute = require("../modules/auth/auth.route");
const authorize = require("./../middlewares/authorize");
const notificationRoute = require("../modules/notification/notification.route");
const productRoute = require("../modules/product/product.route");
const wishlistRoute = require("../modules/wishlist/wishlist.route");
const reviewModel = require("../modules/review/review.model");
const reviewRoute = require("../modules/review/review.route");

router.use("/user", userRoute);
router.use("/category", categoryRoute);
router.use("/auth", authRoute);
router.use("/notification", notificationRoute);
router.use("/product", productRoute);
router.use("/wishlist", wishlistRoute);
router.use("/review", reviewRoute);

module.exports = router;

const router = require("express").Router();
const authRouter = require("./auth");
const dashboardRouter = require("./dashboard");
const webRouter = require("./web");

router.use("/", webRouter);
router.use("/auth", authRouter);
router.use("/dashboard", dashboardRouter);

module.exports = router;

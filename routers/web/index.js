const router = require("express").Router();
const { getGamePage, getHomePage } = require("../../controllers");

router.get("/", getHomePage);
router.get("/game", getGamePage);

module.exports = router;

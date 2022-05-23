const router = require("express").Router();
const {
  getRegister,
  postRegister,
  getLogin,
  postLogin,
} = require("../../controllers");

router.get("/register", getRegister);
router.post("/register", postRegister);
router.get("/login", getLogin);
router.post("/login", postLogin);

module.exports = router;

const router = require("express").Router();
const {
  getCreateUser,
  postCreateUser,
  getDasboardPage,
  getUpdateUser,
  postUpdateUser,
  deleteUser,
} = require("../../controllers");

router.get("/", getDasboardPage);
router.get("/create-user", getCreateUser);
router.post("/create-user", postCreateUser);
router.get("/update-user/:id", getUpdateUser);
router.post("/update-user/:id", postUpdateUser);
router.get("/delete-user/:id", deleteUser);

module.exports = router;

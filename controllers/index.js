const { getRegister, postRegister, getLogin, postLogin } = require("./auth");
const {
  getDasboardPage,
  getCreateUser,
  postCreateUser,
  getUpdateUser,
  postUpdateUser,
  deleteUser,
} = require("./dashboard");

const {
  getHomePage,
  getGamePage,
  getNotFoundPage,
  getErrorPage,
} = require("./web");

module.exports = {
  getRegister,
  postRegister,
  getLogin,
  postLogin,
  getDasboardPage,
  getCreateUser,
  postCreateUser,
  getUpdateUser,
  postUpdateUser,
  deleteUser,
  getHomePage,
  getGamePage,
  getNotFoundPage,
  getErrorPage,
};

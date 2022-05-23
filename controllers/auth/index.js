// const { getHashedPassword, generateAuthToken } = require("../../utils");
const { user_game, user_biodata } = require("../../models");
const layout = "layouts/main";

const getRegister = (req, res) => {
  res.render("register", {
    layout: "layouts/main",
    title: "register",
  });
};

const postRegister = (req, res) => {
  const { firstname, lastname, country, username, password } = req.body;
  //   const hashedPassword = getHashedPassword(password);
  const newUser = { username, password };
  user_game.create(newUser).then(() =>
    user_game
      .findOne({
        where: { username: `${username}` },
      })
      .then((user) =>
        user_biodata.create({
          firstname,
          lastname,
          country,
          userId: user.id,
        })
      )
  );

  res.redirect("/login");
};

const getLogin = (req, res) => {
  res.render("login", {
    layout,
    title: "ROCK PAPER SCISSOR",
  });
};

const postLogin = async (req, res) => {
  const { username, password } = req.body;
  const query = {
    where: {
      username,
      password,
    },
  };
  const admin = require("../../admin.json");
  const user =
    (await user_game.findOne(query)) ||
    (admin.username === username && admin.password === password);
  if (user) {
    res.redirect("/dashboard");
  } else {
    res.render("login", {
      title: "LOGIN",
      layout,
    });
  }
};

module.exports = {
  getRegister,
  postRegister,
  getLogin,
  postLogin,
};

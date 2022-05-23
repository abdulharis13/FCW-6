const { user_game, user_biodata } = require("../../models");
const layout = "layouts/main";

const getDasboardPage = async (req, res) => {
  const users = await user_game.findAll({ include: user_biodata });
  res.render("dashboard", {
    users: users,
    layout,
    title: "dasboard",
  });
};

const getCreateUser = (req, res) => {
  res.render("createUser", {
    layout,
    title: "create user",
  });
};

const postCreateUser = async (req, res) => {
  const { firstname, lastname, country, username, password } = req.body;
  const user = await user_game.create({
    username,
    password,
  });
  user_biodata.create({
    firstname,
    lastname,
    country,
    userId: user.id,
  });

  res.redirect("/dashboard");
};

const getUpdateUser = async (req, res) => {
  const id = req.params.id;
  const query = { where: { id }, include: user_biodata };
  const user = await user_game.findOne(query);

  res.render("editUser", {
    layout,
    title: "edit user",
    user,
  });
};

const postUpdateUser = async (req, res) => {
  const { username, firstname, lastname, country } = req.body;
  const query = {
    where: {
      id: req.params.id,
    },
  };
  user_game.update({ username }, query);
  user_biodata.update(
    {
      firstname,
      lastname,
      country,
    },
    query
  );
  res.redirect("/dashboard");
};

const deleteUser = (req, res) => {
  const queryUser = {
    where: {
      id: req.params.id,
    },
  };
  const queryBiodata = {
    where: {
      userId: req.params.id,
    },
  };
  user_game.destroy(queryUser);
  user_biodata.destroy(queryBiodata);
  res.redirect("/dashboard");
};

module.exports = {
  getCreateUser,
  postCreateUser,
  getDasboardPage,
  getUpdateUser,
  postUpdateUser,
  deleteUser,
};

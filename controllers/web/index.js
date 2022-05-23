const layout = "layouts/main";

const getHomePage = (req, res) => {
  res.render("home", {
    layout,
    title: "TRADITIONAL GAME",
  });
};

const getGamePage = (req, res) => {
  res.render("game", {
    layout,
    title: "TRADITIONAL GAME",
  });
};

module.exports = {
  getHomePage,
  getGamePage,
};

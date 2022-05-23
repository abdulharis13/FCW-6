const fs = require('fs');
const crypto = require('crypto');
const userPath = './data/users.json';
const { user_game } = require('../models');

const loadUsers = () => {
  const fileBuffer = fs.readFileSync(userPath, 'utf-8');
  const users = JSON.parse(fileBuffer);
  return users;
};

const saveUsers = (users) => {
  fs.writeFileSync(userPath, JSON.stringify(users));
};

const addNewUser = (user) => {
  const users = loadUsers();
  users.push(user);
  saveUsers(users);
};

const getHashedPassword = (password) => {
  const sha256 = crypto.createHash('sha256');
  const hash = sha256.update(password).digest('base64');
  return hash;
};

const generateAuthToken = () => {
  return crypto.randomBytes(30).toString('hex');
};

const allUsers = () => {
  user_game.findAll().then((users) => {
    users.forEach((i) => {
      console.log(i.username);
    });
  });
};

console.log(allUsers());

module.exports = {
  loadUsers,
  addNewUser,
  getHashedPassword,
  generateAuthToken,
};

'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.user_biodata, {
        foreignKey: 'userId',
      });
      this.hasMany(models.user_history, {
        foreignKey: 'userId',
      });
    }
  }
  user_game.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'user_game',
    }
  );
  return user_game;
};

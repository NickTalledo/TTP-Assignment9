"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RecipeInventory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RecipeInventory.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      ingredients: DataTypes.TEXT,
      instructions: DataTypes.TEXT,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "RecipeInventory",
      tableName: "recipes",
      underscored: true,
    }
  );
  return RecipeInventory;
};

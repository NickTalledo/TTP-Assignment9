const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Recipe extends Model {}

Recipe.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: [0, 500], // Maximum of 500 characters
      },
    },
    ingredients: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: [0, 1000], // Maximum of 1000 characters
      },
    },
    instructions: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: [0, 5000], // Maximum of 5000 characters
      },
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "RecipeInventory",
    tableName: "recipes",
  }
);

module.exports = Recipe;

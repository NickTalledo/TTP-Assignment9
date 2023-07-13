const { Model, DataTypes } = require("sequelize");
// const sequelize = require('../config/config');

module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    static associate(models) {}
  }

  Recipe.init(
    {
      title: {
        type: DataTypes.TEXT,
        primaryKey: true,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      ingredients: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      instructions: {
        type: DataTypes.TEXT,
        allowNull: true,
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
      // freezeTableName: true,
      underscored: true,
      modelName: "Recipe",
      tableName: "recipes",
    }
  );
  return Recipe;
};

// module.exports = Recipe;

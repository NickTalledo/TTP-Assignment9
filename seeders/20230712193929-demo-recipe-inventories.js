"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "recipes",
      [
        {
          title: "Red Velvet Cake",
          description: "Red cake",
          ingredients: "Sugar, baking soda, vanilla, eggs, flour, butter",
          instructions: "Heat it up",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "Chocolate Cake",
          description: "Brown cake",
          ingredients: "Sugar, baking soda, vanilla, eggs, flour, butter",
          instructions: "Heat it up",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "Vanilla Cake",
          description: "White cake",
          ingredients: "Sugar, baking soda, vanilla, eggs, flour, butter",
          instructions: "Heat it up",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "Coffee Cake",
          description: "Crumb cake",
          ingredients: "Sugar, baking soda, vanilla, eggs, flour, butter",
          instructions: "Heat it up",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("recipes", null, {});
  },
};

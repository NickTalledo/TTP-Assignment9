const { RecipeInventory } = require("./models");
const express = require("express");
const app = express();
const port = 4001;
const { query } = require("./database");
require("dotenv").config();

app.post("/recipes", async (req, res) => {
  try {
    const newRecipe = await RecipeInventory.create(req.body);

    res.status(201).json(newRecipe);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: err.message });
  }
});

app.post("/recipes", async (req, res) => {
  const RecipeData = req.body;
  try {
    const newRecipe = await RecipeInventory.create(RecipeData);
    res.status(201).json(newRecipe);
  } catch (err) {
    if (err.name === "SequelizeValidationError") {
      return res.status(422).json({ errors: err.errors.map((e) => e.message) });
    }
    console.error(err);
    res.status(500).json({ message: "An unexpected error occurred." });
  }
});

app.get("/recipes", async (req, res) => {
  try {
    const allRecipes = await RecipeInventory.findAll();

    res.status(200).json(allRecipes);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: err.message });
  }
});

app.get("/recipes/:id", async (req, res) => {
  const RecipeId = parseInt(req.params.id, 10);

  try {
    const recipe = await RecipeInventory.findOne({ where: { id: RecipeId } });

    if (recipe) {
      res.status(200).json(recipe);
    } else {
      res.status(404).send({ message: "Recipe not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: err.message });
  }
});

app.patch("/recipes/:id", async (req, res) => {
  const RecipeId = parseInt(req.params.id, 10);

  try {
    const [numberOfAffectedRows, affectedRows] = await RecipeInventory.update(
      req.body,
      { where: { id: RecipeId }, returning: true }
    );

    if (numberOfAffectedRows > 0) {
      res.status(200).json(affectedRows[0]);
    } else {
      res.status(404).send({ message: "JRecipe not found" });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
    console.error(err);
  }
});

app.delete("/recipes/:id", async (req, res) => {
  const RecipeId = parseInt(req.params.id, 10);

  try {
    const deleteOp = await RecipeInventory.destroy({ where: { id: RecipeId } });

    if (deleteOp > 0) {
      res.status(200).send({ message: "Recipe deleted successfully" });
    } else {
      res.status(404).send({ message: "Recipe not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

# TTP-Assignment9

Recipe Management System
This is a recipe management system built using Node.js, Express.js, and Sequelize. It provides CRUD functionality for managing recipes and includes server-side data validation using Sequelize's built-in validation methods.

Getting Started
To set up and run the application locally, follow the steps below:

Prerequisites
Node.js (version 12 or above)
NPM (Node Package Manager)

Installation:
Clone the repository to your local machine:
git clone <repository-url>

Change into the project directory:
cd recipe-management-system
Install the dependencies:
npm install

Set up the database:
Create a PostgreSQL database for the application.
Update the database configuration in the config/config.js file with your database credentials.

Run the database migrations to create the required table:
npx sequelize-cli db:migrate
(Optional) Generate seed data to populate the database with initial records:
npx sequelize-cli db:seed:all

Usage:
To start the application, run the following command:
npm start
The application will start running on http://localhost:3000.

API Endpoints:
The following API endpoints are available:

GET /recipes: Retrieve a list of all recipes.
GET /recipes/:id: Retrieve a specific recipe by ID.
POST /recipes: Create a new recipe.
PUT /recipes/:id: Update an existing recipe.
DELETE /recipes/:id: Delete a recipe.

Data Validation:
The server-side data validation is implemented using Sequelize's built-in validation methods. The following fields are validated:
title: Required, minimum length of 3 characters.
description: Required, maximum length of 500 characters.
ingredients: Required, maximum length of 1000 characters.
instructions: Required, maximum length of 5000 characters.

Error Handling:
The application handles errors gracefully and provides appropriate error messages for invalid requests or database errors. Error responses include the relevant HTTP status codes and error messages in the response body.

Testing:
You can use an API testing tool like Postman to test the CRUD operations and data validations of the application. Make requests to the API endpoints mentioned above and ensure that the responses and data validations are working correctly.

Conclusion:
Congratulations! You have successfully set up and run the Recipe Management System. You can now manage recipes, perform CRUD operations, and validate data using Sequelize.
Feel free to explore and extend the application as needed for your specific requirements.
If you have any questions or run into any issues, please don't hesitate to reach out.

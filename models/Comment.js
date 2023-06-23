// Import the necessary dependencies
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

// Define the Comment model
class Comment extends Model {
}

Comment.init(
  {
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
  }
);

// Export the Comment model
module.exports = Comment;

var config = require('../../config').get().dbconfig;
var Sequelize = require('sequelize');
var sequelize = new Sequelize( config.name, config.username, config.password);

var Comment = sequelize.define('Comment', {
  text: Sequelize.STRING,
  privacy: Sequelize.BOOLEAN
});

module.exports = Comment;

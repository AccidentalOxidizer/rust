var config = require('../../config').get().dbconfig;
var Sequelize = require('sequelize');
var sequelize = new Sequelize( config.name, config.username, config.password);

var Url = sequelize.define('Url', {
  path: {
    type: Sequelize.STRING,
    unique: true
  }
});

Url.hasMany(Comment, {as: 'Comments'});

module.exports = Url;
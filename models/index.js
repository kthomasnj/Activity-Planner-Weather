const User = require('./User');
const Activities = require ('./Activities');
const History=require ('./History')

User.hasMany(History, {
  foreignKey:User.id
})

module.exports = {
    User,
    Activities,
    History
  };
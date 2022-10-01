const User = require('./User');
const Activities = require ('./Activities');
const History=require ('./History')

//User has many activities he can select

User.hasMany(History,{
  foreignKey: user_name
})

module.exports = {
    User,
    Activities,
    History,
  };
const sequelize = require('../config/connection');
const { Activities } = require('../models');

const activitiesData= require('./activitesData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  const activities = await Activities.bulkCreate(activitiesData);
  console.log(activitiesData);
}

seedDatabase();

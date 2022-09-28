const sequelize = require('../config/connection');
const { Activities } = require('../models');

const activitesData= require('./activitesData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const activities = await Activities.bulkCreate(activitiesData);
}
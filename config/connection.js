// // Hasna's Connection string

// // require('dotenv').config();

// // const Sequelize = require('sequelize');

// // const sequelize = process.env.JAWSDB_URL
// //   ? new Sequelize(process.env.JAWSDB_URL)
// //   : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
// //       host: 'localhost',
// //       dialect: 'mysql',
// //       dialectOptions: {
// //         decimalNumbers: true,
// //       },
// //     });

// // module.exports = sequelize;



// // Keith's connections string
const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;

const router = require('express').Router();
const { Activities } = require('../../models');

// The `/api/categories` endpoint

const axios = require('axios');
const path = require('path');


router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const activityData = await Activities.findAll({});


    // const activities=[];

    // for(var i=0;i<activityData.length;i++){
    //   activities.push(activityData[i].dataValues.name)
    // }
    // const convertedData=JSON.stringify(activityData);
    // res.render('activities',{openWeatherData: DATA[0], activityList: activities});

    res.status(200).json(activityData);


  } 
  
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

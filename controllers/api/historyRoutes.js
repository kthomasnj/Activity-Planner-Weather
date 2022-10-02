const router = require('express').Router();
const {History} = require('../../models');
const { User } = require('../../models');


router.get('/', async (req, res) => {
  

  try {
    const historyData = await History.findAll({});

    
    res.status(200).json(historyData);
  } catch (err) {
    res.status(500).json(err);
  }
 });

router.post('/', async(req,res) => {
  try {
    for(var i=0;i<req.body.activity.length;i++){
    const historyData = await History.create({
      selectedActivity: req.body.activity[i],
      date: req.body.date,
      user_id: req.session.user_id
    });
  }
    
  } 
  catch (err) {
    res.status(400).json(err);
  }
})
  
  
  module.exports = router;
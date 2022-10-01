const router = require('express').Router();
const {History} = require('../../models');


router.get('/', async (req, res) => {
  try {
    const historyData = await History.findAll({
      include: [{ model: User }],
    });
    res.status(200).json(historyData);
  } catch (err) {
    res.status(500).json(err);
  }
  });

router.post('/', async(req,res) => {
  try { 
    const historyData = await History.create({
      selectedActivity: req.body.activity,
      date: req.body.date,
      user_id: req.body.user
    });
    res.status(200).json(historyData);
  } 
  catch (err) {
    res.status(400).json(err);
  }
})
  
  
  module.exports = router;
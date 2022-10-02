const router = require('express').Router();
const {History} = require('../../models');
const { User } = require('../../models');


router.get('/', async (req, res) => {

  const userData = await User.findOne({ where: { id: req.session.user_id } });
  const userName=userData.dataValues.name;

  console.log(userName);

  try {
    const historyData = await History.findAll({ where: {user_id:req.session.user_id},
      include: [{ model: User }],
    });
    console.log(historyData);
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
      user_id: req.session.user_id
    });
    res.status(200).json(historyData);
  } 
  catch (err) {
    res.status(400).json(err);
  }
})
  
  
  module.exports = router;
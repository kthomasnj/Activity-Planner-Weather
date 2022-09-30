const router = require('express').Router();
const { Activities } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
 
  try {
    const activityData = await Activities.findAll({
      
    });
    res.status(200).json(activityData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

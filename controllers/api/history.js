const router = require('express').Router();


router.get('/', async (req, res) => {
    try {
      //const data = await getData();
      res.status(200).json();
    } catch (err) {
      res.status(500).json('it did not work', err);
    }
  });
  
  
  module.exports = router;
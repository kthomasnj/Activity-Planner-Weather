const router = require('express').Router();
const userRoutes = require('./userRoutes');
const weatherRoutes=require('/weather');

router.use('/users', userRoutes);
router.use('/weather', weatherRoutes);

module.exports = router;
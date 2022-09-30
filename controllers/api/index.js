const router = require('express').Router();
const userRoutes = require('./userRoutes');
const weatherRoutes = require('./weather');
const activityRoutes=require('./activity');

router.use('/users', userRoutes);
router.use('/weather', weatherRoutes);
router.use('/activities',activityRoutes);

module.exports = router;
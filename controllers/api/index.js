const router = require('express').Router();
const userRoutes = require('./userRoutes');
const historyRoutes = require('./historyRoutes');
const activityRoutes=require('./activityRoutes');
const weatherRoutes=require('./weather');

router.use('/users', userRoutes);
router.use('/history', historyRoutes);
router.use('/activities',activityRoutes);
router.use('/weather',weatherRoutes);

module.exports = router;
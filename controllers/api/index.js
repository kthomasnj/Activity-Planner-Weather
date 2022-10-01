const router = require('express').Router();
const userRoutes = require('./userRoutes');
const historyRoutes = require('./history');
const activityRoutes=require('./activity');

router.use('/users', userRoutes);
router.use('/history', historyRoutes);
router.use('/activities',activityRoutes);

module.exports = router;
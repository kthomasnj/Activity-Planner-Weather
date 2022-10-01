const router = require('express').Router();
const { Project, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    res.render('homepage');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/signup', async (req, res) => {
  try {
    res.render('signup');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  res.render('login');
});

router.get('/activities', withAuth, async (req, res) => {

    res.render('activities', {
      logged_in: true
    });
 
  }
);

router.get('/history', withAuth, async (req, res) => {
  try {
    res.render('history', {
      logged_in: true
    });
 
  } catch (err) {
    res.render('login');
  }
});


module.exports = router;

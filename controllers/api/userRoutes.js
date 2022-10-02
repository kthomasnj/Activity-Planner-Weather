const router = require('express').Router();
const { User } = require('../../models');

// Create a new user
router.post('/', async (req, res) => {
  
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.render('activities',{logged_in: req.session.logged_in});
    });
  
});

// Login existing user
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Your email or password is incorrect.' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Your email or password is incorrect.' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.render('activities',{logged_in: req.session.logged_in});
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

// Logout a user
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

//get current username

router.get('/', async (req, res) => {

  const userData = await User.findOne({ where: { id: req.session.user_id } });
  const userName=userData.dataValues.name;

  console.log(userName);
  
  try {
    res.status(200).send(userName);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
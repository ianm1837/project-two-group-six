const router = require('express').Router();
const { User } = require('../../../models');

// you are here: /user/api/preferences
router.get('/', (req, res) => {
  res.render({ message: 'this is the preferences route' });
});

module.exports = router;

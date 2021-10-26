const express = require('express');

const {register,login, logout} = require('./controller');

const router = express.Router();

router.route('/login').post(login);
router.route('/logout').get(logout);
router.route('/register').post(register);

module.exports = router;

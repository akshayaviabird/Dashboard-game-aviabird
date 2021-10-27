const express = require('express');

const router = express.Router();

const {
  getLiveGames,
  createLiveGame,
  updateLiveGame,
} = require('./controller');

router.route('/').get(getLiveGames).post(createLiveGame);

router.route('/:id').put(updateLiveGame);

module.exports = router;
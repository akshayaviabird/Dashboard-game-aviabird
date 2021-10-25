const express = require("express");

const router = express.Router();

const { getLeaderboards, getLeaderboard, createLeaderboard, updateLeaderboard, deleteLeaderboard  } =  require('./controller');


router.route('/')
    .get(getLeaderboards)
    .post(createLeaderboard);

router.route('/:id')
    .get(getLeaderboard)
    .put(updateLeaderboard)
    .delete(deleteLeaderboard);

module.exports = router; 
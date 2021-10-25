   

const express = require("express");

const router = express.Router({ mergeParams: true });

const { getGuessimages, getGuessimage, createGuessimage, updateGuessimage, deleteGuessimage  } =  require('./controller');


router.route('/')
    .get(getGuessimages)
    .post(createGuessimage);

router.route('/:id')
    .get(getGuessimage)
    .put(updateGuessimage)
    .delete(deleteGuessimage);

module.exports = router;    
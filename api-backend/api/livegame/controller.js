const LiveGame =  require('./model');

// @desc Get all Livegame data
// route GET /api/v1/livegame
// @acces public

exports.getLiveGames = async (req,res,next) => {
    const game = await LiveGame.find();
    res.status(200).json({
        success: true,
        count: game.length,
        data: game
    });
};

// @desc Create a LiveGame
// route POST /api/v1/livegame/
// @acces public

exports.createLiveGame = async (req,res,next) => {
    const game = await LiveGame.create(req.body);
    res.status(200).json({
        success: true,
        data: game
    });
};

// @desc Update a LiveGame
// route PUT /api/v1/livegame/:id
// @acces public

exports.updateLiveGame = async (req,res,next) => {
    let game;
    if(req.body.noOfPlayers>0){
        game = await LiveGame.findByIdAndUpdate(req.params.id, {$inc: {noOfPlayers: 1}})
    }else{
        game = await LiveGame.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
    }
    
    if(!game){
        return res.status(400).json({ success: false});
    }

    res.status(200).json({
        success: true,
        data: game
    });
}
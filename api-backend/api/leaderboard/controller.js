const Leaderboard = require('./model');

// @desc Get all leaderboards data
// route GET /api/v1/leaderboard
// @acces public

exports.getLeaderboards = async (req,res,next) => {
    const leaderboardata = await Leaderboard.find();
    res.status(200).json({
        success: true,
        count: leaderboardata.length,
        data: leaderboardata
    });

};
// @desc Get a single leaderboard
// route GET /api/v1/leaderboard/:id
// @acces public

exports.getLeaderboard = async (req,res,next) => {
    
    const leaderboard =  await Leaderboard.findById(req.params.id);
    if(!leaderboard){
        return res.status(400).json({ success: false})
    }
    res.status(200).json({
        success: true,
        message: leaderboard
    });
    
};

// @desc Create a leaderboard
// route POST /api/v1/leaderboard/
// @acces private

exports.createLeaderboard = async (req,res,next) => {

    console.log(req.body)
    const leaderboard = await Leaderboard.create(req.body);

    res.status(200).json({
        success: true,
        data: leaderboard
    });
    
};

// @desc Update a leaderboard
// route PUT /api/v1/leaderboard/:id
// @acces private

exports.updateLeaderboard = async (req,res,next) => {

    const leaderboard = await Leaderboard.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    if(!leaderboard){
        return res.status(400).json({ success: false});
    }

    res.status(200).json({
        success: true,
        data: leaderboard
    });

};

// @desc Delete a leaderboard
// route DELETE /api/v1/leaderboard/:id
// @acces private

exports.deleteLeaderboard =  async (req,res,next) => {
    
    const leaderboard = await Leaderboard.findByIdAndDelete(req.params.id);
    
    if(!leaderboard){
        return res.status(400).json({ success: false});
    }

    res.status(200).json({
        success: true,
        data: leaderboard
    });
    
};
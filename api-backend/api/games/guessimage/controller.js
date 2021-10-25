const Guessimage = require('../guessimage/model')

// @desc Get all Guessimages data
// route GET /api/v1/guessimage
// @acces public

exports.getGuessimages = async (req,res,next) => {
    const guessimagedata = await Guessimage.find();
    res.status(200).json({
        success: true,
        count: guessimagedata.length,
        data: guessimagedata
    });

};
// @desc Get a single Guessimage
// route GET /api/v1/guessimage/:id
// @acces public

exports.getGuessimage = async (req,res,next) => {
    
    const guessimage =  await Guessimage.findById(req.params.id);
    if(!guessimage){
        return res.status(400).json({ success: false})
    }
    res.status(200).json({
        success: true,
        message: guessimage
    });
    
};

// @desc Create a Guessimage
// route POST /api/v1/guessimage/
// @acces private

exports.createGuessimage = async (req,res,next) => {

    console.log(req.body)
    const guessimage = await Guessimage.create(req.body);

    res.status(200).json({
        success: true,
        data: guessimage
    });
    
};

// @desc Update a Guessimage
// route PUT /api/v1/guessimage/:id
// @acces private

exports.updateGuessimage = async (req,res,next) => {

    const guessimage = await Guessimage.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    if(!guessimage){
        return res.status(400).json({ success: false});
    }

    res.status(200).json({
        success: true,
        data: guessimage
    });

};

// @desc Delete a Guessimage
// route DELETE /api/v1/guessimage/:id
// @acces private

exports.deleteGuessimage =  async (req,res,next) => {
    
    const guessimage = await Guessimage.findByIdAndDelete(req.params.id);
    
    if(!guessimage){
        return res.status(400).json({ success: false});
    }

    res.status(200).json({
        success: true,
        data: guessimage
    });
    
};
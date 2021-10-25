const User = require('../user/model')

// @desc Register a new User
// route POST /api/v1/auth/register
// access public
exports.register = async (req,res,next) => {
    const {name, email, password} = req.body;
    const user = await User.create({name,email,password});
    res.status(200).json({
        success: true,
        data: user
    });
};

// @des Login a User
// POST /api/v1/auth/login
//access public
exports.login = async (req,res,next) => {
    const {email, password} = req.body;

    // Check for user
    const user = await User.findOne({email}).select('+password');

    if(!user){
        return res.status(400).json({ success: "false", msg: "User not found!"})
    };

    // Check for password match
    const isMatch = await user.matchPassword(password);

    if(!isMatch){
        return res.status(400).json({ success: "false", msg: "Invalid Password!"})
    }

    res.status(200).json({
        success: true,
        data: user
    });
};
const User = require('../user/model')

// @desc Register a new User
// route POST /api/v1/auth/register
// access public
exports.register = async (req,res,next) => {
    const {name, email, password} = req.body;
    const user = await User.create({name,email,password});
    sendTokenResponse(user, 200, res);
};

// @des Login a User
// POST /api/v1/auth/login
//access public
exports.login = async (req,res,next) => {
    const {email, password} = req.body;

    // Validate email & password
    if (!email || !password) {
        return res.status(400).json({ success: "false", msg: "Please provide email and password!"})
    }

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

    sendTokenResponse(user,200,res);
};

exports.logout = async (req, res, next) => {
    res.cookie('token', 'none', {
        expires: new Date(Date.now() + 10 * 1000),
        httpOnly: true,
    });

    res.status(200).json({
        success: true,
        data: {},
    });
};

// Get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
    // Create token
    const token = user.getSignedJwtToken();
    const options = {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
        httpOnly: true,
        secure: true
    };
    res.status(statusCode).cookie('token', token, options).json({success: true, token});
};
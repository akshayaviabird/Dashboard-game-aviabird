const jwt = require('jsonwebtoken');
const User = require('../api/user/model');

//Protect routes 
exports.protect = async (req,res,next) => {
    let token;
    if(
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        // token from authorzation header
        token = req.headers.authorization.split(' ')[1];
    }else if(req.cookies.token) {
        // set token from cookies
        token = req.cookies.token;
    };

    // Make sure token exists
    if(!token) {
        return res.status(400).json({ success: "false", msg: "Not authorized to access this route! Token doesn't exists"});
    };


    try {
        // Verify token
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id);
        next();
    } catch (err) {
        return res.status(400).json({ success: "false", msg: err});
    }
}
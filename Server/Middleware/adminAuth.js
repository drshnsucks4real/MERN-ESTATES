const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = async function(req, res, next) {

    const token = req.header('x-auth-token');

 
    if (!token) {
        return res.status(401).json({ message: "Authorization denied. No token provided." });
    }


    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.userId);

        if (!user || user.role !== 'admin') {
            return res.status(403).json({ message: "Unauthorized access" });
        }

        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ message: "Token is not valid" });
    }
};

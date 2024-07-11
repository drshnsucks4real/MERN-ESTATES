const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = async function(req, res, next) {
    // Get token from header
    const token = req.header('x-auth-token');

    // Check if no token
    if (!token) {
        return res.status(401).json({ message: "Authorization denied. No token provided." });
    }

    // Verify token
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.userId);

        if (!user || user.role !== 'admin') {
            return res.status(403).json({ message: "Unauthorized access" });
        }

        req.user = decoded; // Set user in request object
        next();
    } catch (err) {
        res.status(401).json({ message: "Token is not valid" });
    }
};

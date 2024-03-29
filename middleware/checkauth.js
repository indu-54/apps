const jwt = require('jsonwebtoken');

const checkAuth = (req, res, next) => {
    // Get the token from the request headers
    const token = req.headers.authorization;

    // Check if token is present
    if (!token) {
        return res.status(401).json({ success: false, message: 'Access denied. No token provided' });
    }

    try {
        // Verify the token
        const decodedToken = jwt.verify(token, 'webBatch');
        req.userData = { userId: decodedToken.userId };
        next();
    } catch (error) {
        console.error('Authentication failed:', error);
        return res.status(401).json({ success: false, message: 'Invalid token' });
    }
};

module.exports = checkAuth;

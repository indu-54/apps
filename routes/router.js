


const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const checkAuth = require('../middleware/checkauth');



// Route for user registration
router.post('/register', async (req, res) => {
    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        // Create a new user instance
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
            password: hashedPassword
        });

        // Save the user to the database
        await user.save();

        res.json({ success: true, message: 'Account created successfully' });
    } catch (error) {
        if (error.code === 11000) {
            return res.json({ success: false, message: 'Email already exists' });
        }
        console.error(error);
        res.json({ success: false, message: 'Registration failed' });
    }
});

// Route for user login
router.post('/login', async (req, res) => {
    try {
        // Find the user by email
        const user = await User.findOne({ email: req.body.email });

        // If user not found, return error
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        // Compare passwords
        const passwordMatch = await bcrypt.compare(req.body.password, user.password);

        // If passwords don't match, return error
        if (!passwordMatch) {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }

        // Create JWT token
        const payload = {
            userId: user._id
        };
        const token = jwt.sign(payload, "webBatch", { expiresIn: '3h' });

        // Return token
        res.json({ success: true, token: token, message: 'Login successful' });
    } catch (error) {
        console.error('Authentication failed:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// Route for user signup
router.post('/signup', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        // Check if user already exists
        if (user) {
            return res.status(400).json({ success: false, message: 'Email already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        // Create a new user instance
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
            password: hashedPassword
        });

        // Save the new user to the database
        await newUser.save();

        res.json({ success: true, message: 'Signup successful' });
    } catch (error) {
        console.error('Signup failed:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

module.exports = router;

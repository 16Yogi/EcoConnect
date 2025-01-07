import express from 'express';
import bcrypt from 'bcrypt';
import db from '../config/connectDb.js';

const router = express.Router();

// User Registration Route (Already Implemented)
router.post('/api/register', async (req, res) => {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        const query = 'INSERT INTO users (fullName, email, password) VALUES (?, ?, ?)';
        db.query(query, [fullName, email, hashedPassword], (err, result) => {
            if (err) {
                console.error('Database error:', err.message);
                return res.status(500).json({ message: 'Database error' });
            }
            res.status(201).json({ message: 'User registered successfully' });
        });
    } catch (error) {
        console.error('Error during password hashing:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
});

// User Login Route (Newly Added)
router.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    // Log incoming data for debugging
    console.log('Login attempt with:', { email, password });

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and Password are required' });
    }

    // Check if user exists in the database
    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, [email], async (err, result) => {
        if (err) {
            console.error('Database error:', err.message);
            return res.status(500).json({ message: 'Database error' });
        }

        if (result.length === 0) {
            return res.status(400).json({ message: 'User not found' });
        }

        const user = result[0];

        // Compare passwords
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Success: User authenticated
        // You can also return a JWT token or other session info if needed
        res.status(200).json({
            message: 'Login successful',
            userId: user.id,
            email: user.email,
        });
    });
});

export default router;

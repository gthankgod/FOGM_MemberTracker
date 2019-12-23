const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Joi = require('joi');
const { Members } = require('../Models/Members');
const jwt = require('jsonwebtoken');
const config = require('config');
let bcrypt = require('bcryptjs');


// @route GET api/users
// @desc  Test route
// @access Public
router.get('/', auth, async (req, res) => {
    try {
        const member = await Members.findById(req.member.id).select('-password');
        res.json(member);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Server error' });
    }
});

// @route GET api/auth
// @desc Register route
// @access Public
router.post('/login', async (req, res) => {

    const { error } = validateMember(req.body);
    if (error) { return res.status(400).json({ msg: 'Invalid Entries' }); }

    const { username, password } = req.body;
    try {
        let member = await Members.findOne({ username });
        if (!member) {
            return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });
        }
        let isMatch = await bcrypt.compare(password, member.password);
        if (!isMatch) {
            return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });
        }

        const payload = {
            member: {
                id: member.id
            }
        }

        jwt.sign(payload, config.get("jwtSecret"), { expiresIn: 360000 }, (err, token) => {
            if (err) throw err;
            res.json({ token })
        });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

function validateMember(member) {
    const schema = {
        username: Joi.string().min(3).max(50).required(),
        password: Joi.string().min(3).max(50).required()
    }
    return Joi.validate(member, schema);
}

module.exports = router;

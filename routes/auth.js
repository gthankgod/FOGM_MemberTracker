const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Joi = require('joi');
const { Members, validateMember } = require('../Models/Members');
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

    const { error } = validate(req.body);
    if (error) { return res.status(400).json({ msg: 'Invalid Entries' }); }

    const { username, password } = req.body;
    try {
        let member = await Members.findOne({ username });
        if (!member) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }
        let isMatch = await bcrypt.compare(password, member.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
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

router.post('/signup', async (req, res) => {
    const { error } = validateMember(req.body);
    if (error) return res.status(400).json({ msg: 'Invalid Entries' });

    let emailFinder = await Members.findOne({ username: req.body.username });
    if (emailFinder) return res.status(400).json({ msg: 'Member with the given username already exist' });

    const { firstname, lastname, username, family, gender, email, password, phonenumber, whatsappnumber, homeaddress, workaddress, branch, birthday, unit } = req.body;

    member = new Members({
        firstname,
        lastname,
        username,
        family,
        password,
        gender,
        email,
        phonenumber,
        whatsappnumber,
        homeaddress,
        workaddress,
        branch,
        birthday,
        unit
    });

    const salt = await bcrypt.genSalt(10);
    member.password = await bcrypt.hash(member.password, salt);
    member = await member.save();

    const payload = {
        member: {
            id: member.id
        }
    }

    jwt.sign(payload, config.get("jwtSecret"), { expiresIn: 360000 }, (err, token) => {
        if (err) throw err;
        res.json({ token })
    });
});

function validate(member) {
    const schema = {
        username: Joi.string().min(3).max(50).required(),
        password: Joi.string().min(3).max(50).required()
    }
    return Joi.validate(member, schema);
}

module.exports = router;

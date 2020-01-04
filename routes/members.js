const express = require('express');
const { validateMember, Members } = require('../Models/Members');
const debug = require('debug')('route_member');
const router = express.Router();

router.get('/', async (req, res) => {
    const members = await Members.find();
    res.json(members);
});

router.put('/', async (req, res) => {
    let { username } = req.body;
    const member = await Members.findOne({ username });

    if (!member) return res.status(400).json({ status: 'error', msg: 'Username does not exist' });

    res.json(member);
});

router.delete('/', async (req, res) => {
    let { username } = req.body;
    await Members.findOneAndDelete({ username });
    const members = await Members.find();
    res.json(members);
});

module.exports = router;
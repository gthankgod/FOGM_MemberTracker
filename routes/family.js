const express = require('express');
const router = express.Router();
const { validateFamily, Families } = require('../Models/Family');


router.get('/', async (req, res) => {
    const families = await Families.find();
    res.status(200).json(families);
})

router.post('/', async (req, res) => {
    const { error } = validateFamily(req.body);
    if (error) return res.status(400).json({ status: 'error', msg: 'Invalid Entry' });

    const { familyName } = req.body;
    let family = await Families.findOne({ familyName });
    if (family) return res.status(400).json({ status: 'error', msg: 'Family already exist' });

    family = new Families({
        familyName
    });

    family = await family.save();
    res.json(family);
});

module.exports = router;
const express = require('express');
const { validateMember, Members } = require('../Models/Members');
const debug = require('debug')('route_member');
const router = express.Router();

router.post('/', (req, res) => {
    if (!req.body.email) { req.body.email = 'Not available' };
    const { error } = validateMember(req.body);
    if (error) return res.status(400).json({ msg: 'Invalid Entries' });

    // let emailFinder = await Members.findOne({ email: req.body.email });
    // if (emailFinder) return res.status(400).json({ msg: 'Member with the given email already exist' });
    let members = await Members.find({ firstName: req.body.firstName });


    let member = members.find(member => member.lastName === req.body.lastName);

    if (member) return res.status(400).json({ msg: 'Member with the given Surname and FirstName already Exist' });
    const { firstName, lastName, family, gender, email, phoneNumber, whatsappNumber, homeAddress, workAddress, branch, birthday, unit } = req.body;

    member = new Members({
        firstName,
        lastName,
        family,
        gender,
        email,
        phoneNumber,
        whatsappNumber,
        homeAddress,
        workAddress,
        branch,
        birthday,
        unit
    });

    await member.save();
    res.redirect('/members/members');
});

module.exports = router;
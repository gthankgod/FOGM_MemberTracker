const Joi = require('joi');
const mongoose = require('mongoose');


const MemberSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    lastName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    uaername: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    family: {
        type: FamilySchema
    }
    ,
    gender: {
        type: String,
        required: true,
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    phoneNumber: {
        type: String,
        required: true
    },
    whatsappNumber: {
        type: String
    },
    homeAddress: {
        type: String,
        required: true
    },
    workAddress: {
        type: String
    },
    branch: {
        type: String,
        required: true
    },
    birthday: {
        type: String,
        required: true
    },
    unit: {
        type: String,
        required: true
    },
    role: {
        type: Array,
    }
});

module.exports.Members = mongoose.model('Members', MemberSchema);
module.exports.validateMember = validateMember;

function validateMember(member) {
    const schema = {
        firstName: Joi.string().min(3).max(50).required(),
        lastName: Joi.string().min(3).max(50).required(),
        family: Joi.string(),
        gender: Joi.string().required(),
        email: Joi.string(),
        password: Joi.string().min(5).max(255),
        phoneNumber: Joi.string().min(11).max(50),
        whatsappNumber: Joi.string().min(11).max(50),
        homeAddress: Joi.string().min(3).max(50).required(),
        workAddress: Joi.string().min(3).max(50),
        branch: Joi.string().min(3).max(50).required(),
        birthday: Joi.string().min(3).max(50).required(),
        role: Joi.string(),
        unit: Joi.string()
    };
    return Joi.validate(member, schema);
}
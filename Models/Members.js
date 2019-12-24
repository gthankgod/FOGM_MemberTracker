const Joi = require('joi');
const mongoose = require('mongoose');


const MemberSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    lastname: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    username: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    family: {
        familyName: {
            type: String
        },
        roleInFamily: {
            type: String
        }
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
    phonenumber: {
        type: String,
        required: true
    },
    whatsappnumber: {
        type: String
    },
    homeaddress: {
        type: String,
        required: true
    },
    workaddress: {
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
        firstname: Joi.string().min(3).max(50).required(),
        lastname: Joi.string().min(3).max(50).required(),
        username: Joi.string().min(3).max(50).required(),
        family: Joi.string(),
        gender: Joi.string().required(),
        email: Joi.string(),
        password: Joi.string().min(5).max(255),
        phonenumber: Joi.string().min(11).max(50),
        whatsappnumber: Joi.string().min(11).max(50),
        homeaddress: Joi.string().min(3).max(50).required(),
        workaddress: Joi.string().min(3).max(50),
        branch: Joi.string().min(3).max(50).required(),
        birthday: Joi.string().required(),
        role: Joi.string(),
        unit: Joi.string()
    };
    return Joi.validate(member, schema);
}
const Joi = require('joi');
const mongoose = require('mongoose');


const FamilySchema = new mongoose.Schema({
    familyName: {
        type: String
    }
});

module.exports.Families = mongoose.model('Families', FamilySchema);
module.exports.validateFamily = validateFamily;

function validateFamily(family) {
    const schema = {
        familyName: Joi.string().required()
    };
    return Joi.validate(family, schema);
}
const debug = require('debug')('app:db');
// const mongoose = require('mongoose');
const config = require('config');

function db() {
    // mongoose.connect('mongodb://localhost/MemberTracker', { useNewUrlParser: true, useCreateIndex: true })
    //     .then(() => debug('connected'))
    //     .catch((err) => debug('Error', err))
}

module.exports = db;
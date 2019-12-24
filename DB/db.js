const debug = require('debug')('app:db');
const mongoose = require('mongoose');
const config = require('config');

function db() {
    mongoose.connect(`mongodb+srv://${config.get('dbusername')}:${config.get('dbpassword')}@cluster0-lkzaz.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
        .then(() => debug('connected'))
        .catch((err) => debug('Error', err))
}

module.exports = db;
const express = require('express');
const path = require('path');
const debug = require('debug')('app:index');

const auth = require('./routes/auth');

const app = express();
require('./DB/db')();

app.use(express.static(path.join(__dirname, 'client', 'build')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('*', (req, res) => { res.sendfile(path.join(__dirname, 'client', 'build', 'index.html')) });
}

app.use('/auth', auth);

app.get('*', (req, res) => { res.sendFile(path.join(__dirname, 'client', 'public', 'index.html')); })

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => debug(`Server listening on port ${PORT}`));
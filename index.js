const express = require('express');
const debug = require('debug')('app:index');

const auth = require('./routes/auth');

const app = express();
require('./DB/db')();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/auth', auth);
app.get('/', (req, res) => {
    res.send('Welcome');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => debug(`Server listening on port ${PORT}`));
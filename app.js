const express = require('express');
const mongoose = require('mongoose');
const getRealTime = require('./api/dataRealtime/router');
const getDataDaily = require('./api/dataDaily/router');

const app = express();
const linkDataBase = 'mongodb://ddoongngoo:ngodong97@ds155218.mlab.com:55218/arduino';

mongoose.connect(linkDataBase,
    { useNewUrlParser: true },
    (err) => {
        if (err) console.log(err);
        else console.log('DB connected successfully!');
    }
);
app.use('/api/dataRealtime', getRealTime);
app.use('/api/dataDaily', getDataDaily);

const port = process.env.PORT || 3000;
app.listen(port, (err) => {
    if (err) console.log(err);
    else console.log('Listening at port ' + port);
})
const express = require('express');
const router = express.Router();
const Data = require('./controller');
const moment = require('moment');

router.use((req, res, next) => {
    next();
})

router.post('/', (req, res) => {
    let body = [];
    req.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        Data
            .creatData({
                "temperature": JSON.parse(body).temperature,
                "humidity": JSON.parse(body).humidity,
                "dustDensity": JSON.parse(body).dustDensity,
                "time": moment().unix()
            })
            .then(() => res.send({
                err_code: 0,
                message: 'success',
            }))
            .catch(err => {
                console.log(err);
                res.status(500).send({
                    err_code: 1,
                    message: 'fail',
                })
            })
    });
});

router.get("/", (req, res) => {
    Data
        .getData()
        .then(data => res.send({
            err_code: 0,
            message: 'success',
            data: data
        }))
        .catch(err => {
            console.error(err);
            res.status(500).send(err);
        });
});

module.exports = router;
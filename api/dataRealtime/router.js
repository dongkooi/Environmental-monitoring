const express = require('express');
const router = express.Router();
const Data = require('./controller');

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
            .creatData(JSON.parse(body))
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
        .then(data => res.send(data))
        .catch(err => {
            console.error(err);
            res.status(500).send(err);
        });
});

module.exports = router;
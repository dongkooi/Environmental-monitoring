
const dataModal = require('./modal');
const monent = require('moment');
const creatData = ({ temperature, humidity, dustDensity, time }) =>
    new Promise((resolve, reject) => {
        dataModal.create({ temperature, humidity, dustDensity, time })
            .then(data => resolve(data))
            .catch(err => reject(err))
    });

const getData = () =>
    new Promise((resolve, reject) => {
        dataModal
            .find({ time: { $gt: monent().subtract(1, 'day').unix() } }, { _id: 0 })
            .sort({ time: 1 })
            .pretty()
            .exec()
            .then(data => resolve(data))
            .catch(err => reject(err));
    });
module.exports = {
    creatData,
    getData
}

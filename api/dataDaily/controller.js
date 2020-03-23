
const dataModal = require('./modal');
const monent = require('moment');
const creatData = ({ temperature, humidity, time }) =>
    new Promise((resolve, reject) => {
        dataModal.create({ temperature, humidity, time })
            .then(data => resolve(data))
            .catch(err => reject(err))
    });

const getData = () =>
    new Promise((resolve, reject) => {
        dataModal
            .find({ time: { $gt: monent().startOf('day').unix() } })
            .sort({ _id: -1 })
            .exec()
            .then(data => resolve(data))
            .catch(err => reject(err));
    });
module.exports = {
    creatData,
    getData
}
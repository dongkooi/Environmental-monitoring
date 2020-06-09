
const dataModal = require('./modal');
const creatData = ({ temperature, humidity, dustDensity, time }) =>
    new Promise((resolve, reject) => {
        dataModal.create({ temperature, humidity, dustDensity, time })
            .then(data => resolve(data))
            .catch(err => reject(err))
    });

const getData = () =>
    new Promise((resolve, reject) => {
        dataModal
            .find({}, { _id: 0 })
            .sort({ time: -1 })
            .pretty()
            .limit(1)
            .exec()
            .then(data => resolve(data))
            .catch(err => reject(err));
    });
module.exports = {
    creatData,
    getData
}
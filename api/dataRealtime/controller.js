
const dataModal = require('./modal');
const creatData = ({ temperature, humidity }) =>
    new Promise((resolve, reject) => {
        dataModal.create({ temperature, humidity, time })
            .then(data => resolve(data))
            .catch(err => reject(err))
    });

const getData = () =>
    new Promise((resolve, reject) => {
        dataModal
            .find({})
            .sort({ _id: -1 })
            .limit(1)
            .exec()
            .then(data => resolve(data))
            .catch(err => reject(err));
    });
module.exports = {
    creatData,
    getData
}
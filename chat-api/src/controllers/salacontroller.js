const salaModel = require('../models/salamodel');

exports.get = async () => {
    return await salaModel.listarSalas();
}
const { Request } = require('../db');


const getLogs = async (req, res, next) => {
    try {
        let response = await Request.findAll();
        res.status(200).send(response);
    } catch (err) {
        next(err);
    }
}

module.exports = getLogs;
const { Request } = require('../db');


const newRequest = async (req, res, next) => {
    const { ip, name } = req.query;
    try {
        if(ip && name) {
            await Request.create({
                ip,
                date: new Date(),
                name
            })
            res.status(200).send("Successfully created")
        } else {
            res.status(400).send("IP or NAME not found")
        }
    } catch (err) {
        next(err);
    }
}

module.exports = newRequest;
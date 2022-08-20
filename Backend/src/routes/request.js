const { Router } = require('express');
const router = Router();

let newRequest = require("../controllers/newRequest.js")
const getLogs = require('../controllers/getLogs.js');

router.post("/", newRequest)
router.get("/", getLogs)

module.exports = router;
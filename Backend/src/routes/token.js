const { Router } = require('express');
const router = Router();

let getToken = require("../controllers/getToken.js")

router.get("/", getToken)

module.exports = router;
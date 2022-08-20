const { Router } = require('express');
const router = Router();

let routerArtist = require('./artist.js')
let routerRequest = require('./request.js')
let routerToken = require('./token.js')

router.use("/artist", routerArtist)
router.use("/request", routerRequest)
router.use("/token", routerToken)

module.exports = router;
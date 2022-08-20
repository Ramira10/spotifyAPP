const { Router } = require('express');
const router = Router();

let routerArtist = require('./artist.js')
let routerRequest = require('./request.js')

router.use("/artist", routerArtist)
router.use("/request", routerRequest)

module.exports = router;
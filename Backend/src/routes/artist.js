const { Router } = require('express');
const router = Router();

let getArtistByName = require("../controllers/getArtistByName.js")
let getArtistAlbums = require("../controllers/getArtistAlbums.js")

router.get("/", getArtistByName)
router.get("/albums/:id", getArtistAlbums)

module.exports = router;
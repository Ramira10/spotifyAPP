const fs = require("fs");
const SpotifyWebApi = require("spotify-web-api-node");
const spotifyApi = new SpotifyWebApi();
var request = require("request");

// GET ARTIST BY NAME
const getArtistAlbums = async (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");

  var client_id = "b9d1f99889a84704955a068c5d4f0da7";
  var client_secret = "3c330019aa5d466ea5b3ac71c6f63656";

  // your application requests authorization
  var authOptions = {
    url: "https://accounts.spotify.com/api/token",
    headers: {
      Authorization:
        "Basic " +
        new Buffer(client_id + ":" + client_secret).toString("base64"),
    },
    form: {
      grant_type: "client_credentials",
    },
    json: true,
  };

  request.post(authOptions, async function (error, response, body) {
    if (!error && response.statusCode === 200) {
      result = { token: body.access_token };
    }
    const token = result.token;
    spotifyApi.setAccessToken(token);

    const { id } = req.params;
    try {
      const data = await spotifyApi.getArtistAlbums(id);

      let albums = [];
      for (let i = 0; i < data.body.items.length; i++) {
        albums.push({
          name: data.body.items[i].name,
          image: data.body.items[i].images[0].url,
        });
      }
      res.status(200).send(albums);
    } catch (err) {
      next(err);
    }
  });
};

module.exports = getArtistAlbums;

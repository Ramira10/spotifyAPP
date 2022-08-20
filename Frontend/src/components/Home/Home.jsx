import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearAlbums,
  // getAlbums,
  getArtist,
  // getLogs,
  saveRequest,
} from "../../redux/actions";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import s from "./Home.module.css";

function Home() {
  const dispatch = useDispatch();
  const artist = useSelector((state) => state.artist);

  const [input, setInput] = useState("");

  useEffect(() => {
    dispatch(clearAlbums());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let handleChange = (e) => {
    setInput(e.target.value);
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    if (!input) {
      Swal.fire({
        icon: "error",
        text: "Field cannot be null",
      });
    } else {
      dispatch(getArtist(input)).then((r) => {
        if (!r) {
          Swal.fire({
            icon: "error",
            text: "Artist not found",
          });
        } else {
          axios.get("https://api.ipify.org?format=json").then((response) => {
            dispatch(saveRequest(response.data.ip, r.payload.name));
          });
        }
      });
      setInput("");
    }
  };

  return (
    <div>
      <div>
        <div className={s.icon}>
          <img
            className={s.img}
            alt="Not found"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png"
          ></img>
        </div>

        <div className={s.contitle}>
          <h1 onClick={(e) => window.location.reload()} className={s.title}>
            SPOTIFY
          </h1>
        </div>
      </div>

      <br></br>

      <form>
        <div className={s.search}>
          <input
            className={s.input}
            onChange={(e) => handleChange(e)}
            type="text"
            value={input}
          ></input>
          <button
            className={s.btn}
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            ⌕
          </button>
        </div>
      </form>

      <div className={s.logs}>
        <Link to="/logs">
          <button className={s.btnlogs}>LOGS</button>
        </Link>
      </div>

      <div>
        {artist ? (
          <div className={s.contartist}>
            <div>
              <Link to="/albums">
                {artist.image ? (
                  <div>
                    <img
                      className={s.artistIMG}
                      alt="Not found"
                      src={artist.image}
                    ></img>
                  </div>
                ) : (
                  <div></div>
                )}
              </Link>
            </div>
            <div>
              <h3 className={s.artist}>{artist.name}</h3>
            </div>
          </div>
        ) : (
          <div>NO HAY</div>
        )}
      </div>
    </div>
  );
}

export default Home;

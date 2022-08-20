import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAlbums } from "../../redux/actions";
import Cart from "./Cart";
import s from "./Albums.module.css";
import load from "./load.gif"

function Albums() {
  const artist = useSelector((state) => state.artist);
  const albums = useSelector((state) => state.albums);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAlbums(artist.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className={s.contitle}>
        <h1 className={s.title}>ALBUMS</h1>
      </div>

      {albums.length ? (
        <div className={s.cont}>
          {albums.map((a) => {
            return (
              <div>
                <Cart name={a.name} image={a.image} />
              </div>
            );
          })}
        </div>
      ) : (
        <div className={s.contload}>
          <img alt="Not found" className={s.loading} src={load}></img>
        </div>
      )}

      <Link to="/">
      <button className={s.btnback}>«</button>
      </Link>
    </div>
  );
}

export default Albums;

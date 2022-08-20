import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getLogs } from "../../redux/actions";
import s from "./Logs.module.css";

function Logs() {
  const dispatch = useDispatch();
  const logs = useSelector((state) => state.logs);

  useEffect(() => {
    dispatch(getLogs());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className={s.contitle}>
        <h1 className={s.title}>LOGS</h1>
      </div>

      {logs.length ? (
        <div>
          {logs.map((l) => {
            return (
              <div className={s.logs}>
                IP: {l.ip} DATE: {l.date.slice(0, 10).replaceAll("-", "/")}{" "}
                ARTIST: {l.name}
              </div>
            );
          })}
        </div>
      ) : (
        <div className={s.nullogs}>No recent searches</div>
      )}

      <div>
        <Link to="/">
          <button className={s.btnback}>«</button>
        </Link>
      </div>
    </div>
  );
}

export default Logs;

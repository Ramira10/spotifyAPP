import React from "react";
import s from "./Cart.module.css"

function Cart({name,image}) {


  return (
    <div className={s.cont}>
        <h3 className={s.title}>{name}</h3>
        <img alt="Not Found" className={s.img} src={image} />
    </div>
  );
}

export default Cart;

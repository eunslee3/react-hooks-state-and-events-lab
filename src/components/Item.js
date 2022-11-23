import React from "react";
import { useState } from 'react'

function Item({ name, category }) {
  const [Cart, setCart] = useState(false)

  function InCart() {
    setCart((Cart) => !Cart)
  }

  function ChangeClass() {
    return Cart ? "in-cart" : ""
  }

  return (
    <li className={Cart ? "in-cart" : ""}>
      <span >{name}</span>
      <span className="category">{category}</span>
      <button className={Cart ? "remove" : ""} onClick={InCart}>{Cart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;

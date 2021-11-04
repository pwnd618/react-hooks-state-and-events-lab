import React, {useState} from "react";

function Item({ name, category }) {
  const [currentClassName, setCurrentClassName] = useState(true)
  const cartUpdate = currentClassName ? "Add to Cart" : "Remove From Cart"
  function changeCart() {
  setCurrentClassName(cart => !cart)
  }

  return (
    <li className={currentClassName ? '' : "in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={currentClassName ? "add" : "remove"} onClick={changeCart}>{cartUpdate}</button>
    </li>
  );
}

export default Item;

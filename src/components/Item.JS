import React from "react";

const Item = (props) => {
  return (
    <li className="item">
      <ul className="notesList">{props.children}</ul>
    </li>
  );
};

export default Item;

import React from "react";

const List = (props) => {
  return (
    <li className="list">
      <ul className="itemsList">{props.children}</ul>
    </li>
  );
};

export default List;

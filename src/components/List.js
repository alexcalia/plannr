import React from "react";
import Item from "./Item";

const List = (props) => {
  return (
    <li className="list">
      <p>{props.listName}</p>
      <ul className="itemsList">
        {props.items
          ? props.items.map((item) => {
              return <Item notes={item} name={Object.keys(item)} />;
            })
          : null}
      </ul>
    </li>
  );
};

export default List;

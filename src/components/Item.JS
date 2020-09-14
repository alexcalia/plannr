import React from "react";
import Note from "./Note";

const Item = (props) => {
  const noteName = Object.keys(props.notes);
  return (
    <li className="item">
      <p>{props.name}</p>
      <ul className="notesList">
        {props.notes[noteName].map((item) => {
          return (
            <Note name={Object.keys(item)}>{item[Object.keys(item)]}</Note>
          );
        })}
      </ul>
    </li>
  );
};

export default Item;

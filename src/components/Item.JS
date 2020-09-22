import React from "react";
import Note from "./Note";
import DeleteButton from "./DeleteButton";

const Item = (props) => {
  const noteName = Object.keys(props.notes);
  return (
    <li className="item">
      <p>{props.name}</p>
      <DeleteButton pathName={props.pathName} name={props.name} />
      <ul className="notesList">
        {props.notes[noteName].map((item) => {
          return (
            <Note
              name={Object.keys(item)}
              pathName={`${props.pathName}/${props.name}`}
            >
              {item[Object.keys(item)]}
            </Note>
          );
        })}
      </ul>
    </li>
  );
};

export default Item;

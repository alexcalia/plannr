import React from "react";
import DeleteButton from "./DeleteButton";

const Note = (props) => {
  return (
    <li className="note">
      {props.children}{" "}
      <DeleteButton pathName={props.pathName} name={props.name} />
    </li>
  );
};

export default Note;

import React from "react";

const Note = (props) => {
  return <li className="note">{props.children}</li>;
};

export default Note;

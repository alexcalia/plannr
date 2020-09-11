import React, { useState, useEffect } from "react";
import List from "./List";
import TextInput from "./TextInput";
import Item from "./Item";
import Note from "./Note";

const Board = () => {
  return (
    <ul className="board">
      <List>
        <Item>
          <Note />
          <TextInput className="noteInput" />
        </Item>
        <TextInput className="itemInput" />
      </List>
      <li>
        <TextInput className="listInput" />
      </li>
    </ul>
  );
};

export default Board;

import React, { useState, useEffect } from "react";
// import List from "./List";
// import TextInput from "./TextInput";
// import Item from "./Item";
// import Note from "./Note";
import firebase from "../firebase";

const dbRef = firebase.database().ref("board");

const Board = () => {
  const [items, setItems] = useState([]);
  const [lists, setLists] = useState([]);

  useEffect(() => {
    dbRef.on("value", (response) => {
      const snap = response.val();
      setLists(Object.keys(snap));
      console.log(lists);
      let snapItems = {};

      lists.forEach((list) => {
        let notes = [];
        for (let note in snap[list]) {
          notes.push(snap[list][note]);
        }
        snapItems = { ...snapItems, [list]: notes };
      });

      setItems(snapItems);
    });
  }, []);

  return <ul className="board"></ul>;
};

export default Board;

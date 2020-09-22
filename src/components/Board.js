import React, { useState, useEffect } from "react";
import List from "./List";
import TextInput from "./TextInput";
import firebase from "../firebase";

const dbRef = firebase.database().ref("board");

const Board = () => {
  const [items, setItems] = useState([]);
  const [lists, setLists] = useState([]);

  useEffect(() => {
    dbRef.on("value", (response) => {
      const snap = response.val();
      const listsArray = Object.keys(snap);

      let snapItems = {};

      console.log(snap);
      console.log(listsArray);

      listsArray.forEach((list) => {
        let notes = [];
        for (let note in snap[list]) {
          let innerNotes = [];
          for (let iNote in snap[list][note]) {
            innerNotes.push({ [iNote]: snap[list][note][iNote] });
          }
          notes.push({ [note]: innerNotes });
        }
        snapItems = { ...snapItems, [list]: notes };
      });
      setLists(listsArray);
      setItems(snapItems);
    });
  }, []);

  return (
    <ul className="board">
      {lists.map((list) => {
        return <List items={items[list]} listName={list} pathName={`/board`} />;
      })}
      {/* <TextInput /> */}
    </ul>
  );
};

export default Board;

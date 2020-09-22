import React from "react";
import firebase from "../firebase";

const DeleteButton = (props) => {
  const dbRef = firebase.database().ref(`${props.pathName}`);
  return (
    <button onClick={() => dbRef.child(`${props.name}`).remove()}>
      Delete
    </button>
  );
};

export default DeleteButton;

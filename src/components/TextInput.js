import React from "react";

const TextInput = (props) => {
  const [className] = props;
  return (
    <form className="textInputComponent">
      <label htmlFor={className} className="srOnly"></label>
      <input type="text" name="textInput" className={className} />
      <button>+</button>
    </form>
  );
};

export default TextInput;

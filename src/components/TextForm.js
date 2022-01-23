import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");
  const hanbleUpclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Convert to upper case","success")

  };

  const hanbleClearclick = () => {
    let newText = "";
    setText(newText);

  };

  const hanbleextrospaceclick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const hanblLOeclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Convert to lower case","success")

  };
  const handleonchange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div
        className={`container text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h4 className="my-3">{props.title}</h4>
        <textarea
          className="form-control container"
          style={ {background:props.mode === "light" ? "white" : 'gray',color:props.mode === "light"? "black":'white'}}
          id="exampleFormControlTextarea1"
          placeholder="Enter the text"
          value={text}
          onChange={handleonchange}
          rows="8"
        ></textarea>
        <div>
          <button className={`btn btn-primary mt-3 `} onClick={hanbleUpclick}>
            CONVERT TO UPPERCASE
          </button>
          <button className="btn btn-primary mx-2 mt-3" onClick={hanblLOeclick}>
            CONVERT TO LOWERCASE
          </button>
          <button
            className="btn btn-primary mx-2 sm mt-3"
            onClick={hanbleextrospaceclick}
          >
            REMOVE EXTRA SPACES
          </button>
          <button
            className="btn btn-primary mx-2 mt-3"
            onClick={hanbleClearclick}
          >
            CLEAR TEXT
          </button>
        </div>
      </div>

      <div
        className={`mt-3 container text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h4>Your text summary </h4>
        <p>
          <b>{text.split(" ").length}</b> words and <b>{text.length+1-text.split(" ").length} </b>
          characters
        </p>
        <p>{0.008 * (text.split(" ").length-1)} minutes read</p>
      </div>
    </>
  );
};

export default TextForm;

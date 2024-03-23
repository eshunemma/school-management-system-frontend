import React from "react";
import "./Button.css";

const ButtonIn = (props) => {
  return (
    <div className={"btn-lg " + props.class}>
      <button id={props.id} type="submit" onClick={props.onClick}>
        {props.name}
      </button>
    </div>
  );
};

export default ButtonIn;

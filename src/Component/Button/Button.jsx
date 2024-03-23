import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <div className={`button ${props.class}`}>
      <a href={props.link}>{props.name}</a>
    </div>
  );
};

export default Button;

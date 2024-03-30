import React from "react";

const Square = (props) => {
  return (
    <div className="square-container" onClick={props.onClick}>
      {props.value}
    </div>
  );
};

export default Square;

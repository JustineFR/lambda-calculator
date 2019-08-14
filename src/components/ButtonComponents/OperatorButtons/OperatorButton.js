import React from "react";

const OperatorButton = (props) => {
  console.log("props: ", props)
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="button">
        {props.oper.char}
      </button>
    </>
  );
};

export default OperatorButton;
import React from "react";

function Props(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <button onClick={props.onBtnClicked}>Click to hello</button>
    </div>
  );
}

export default Props;

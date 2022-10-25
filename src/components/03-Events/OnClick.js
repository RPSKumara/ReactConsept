import React from "react";

function OnClick() {
  const hello = () => {
    alert("Hello world");
  };
  return (
    <div>
      <p onClick={hello}>Click to say hello</p>
    </div>
  );
}

export default OnClick;

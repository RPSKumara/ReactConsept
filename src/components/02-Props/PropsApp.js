import React from "react";
import PropsData from "./Props";

export default function PropsApp() {
  const hello = () => {
    alert("Hello world");
  };
  return (
    <div>
      <PropsData
        title="This is title"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
        onBtnClicked={hello}
      />
    </div>
  );
}

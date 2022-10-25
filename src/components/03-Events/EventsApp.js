import React from "react";
import OnBlur from "./OnBlur";
import OnChange from "./OnChange";
import OnClick from "./OnClick";

function EventsApp() {
  return (
    <div>
      <OnClick />
      <OnBlur />
      <OnChange />
    </div>
  );
}

export default EventsApp;

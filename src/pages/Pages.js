import React from "react";
import { FunctionComp } from "../components/01-FunctionComponents/FunctionComp";
import PropsApp from "../components/02-Props/PropsApp";
import EventsApp from "../components/03-Events/EventsApp";
import HooksApp from "../components/04-Hooks/HooksApp";

function Pages() {
  return (
    <div>
      <hr />

      {/* This is a react function component */}
      <FunctionComp />
      <hr />

      {/* This is a practice of react props */}
      <PropsApp />
      <hr />

      {/* This is a practice of react Events */}
      <EventsApp />
      <hr />

      {/* This is a practice of react Hooks */}
      <HooksApp />
      <hr />
    </div>
  );
}

export default Pages;

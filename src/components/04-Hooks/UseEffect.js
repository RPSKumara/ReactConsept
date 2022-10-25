import React, { useEffect } from "react";

function UseEffect() {
  useEffect(() => {
    console.log("effect");
    return () => {
      console.log("cleanup");
    };
  }, []);
  return <div>UseEffect</div>;
}

export default UseEffect;

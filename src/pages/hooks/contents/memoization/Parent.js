import React, { useState, useMemo } from "react";

import Child from "./Child";

export default function Parent({ ...props }) {
  const [age, setAge] = useState(0);

  // const name = {
  //   last: "정",
  //   first: "윤",
  // };

  const name = useMemo(() => {
    return {
      last: "정",
      first: "윤",
    };
  }, []);

  const add = () => {
    setAge((prevState) => prevState + 1);
  };

  console.log("Rendering - Parent");

  return (
    <>
      <span className="script-title">{props.url.title}</span>
      <span className="script-border" />
      <div className="note">
        <div className="button-label">{`Parent ${age}`}</div>
        <button className="button" onClick={add}>
          add
        </button>
        <Child name={name} />
      </div>
    </>
  );
}

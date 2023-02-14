import React, { useState, useCallback, useEffect } from "react";

export default function Counter({ ...props }) {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("white");

  // const reset = () => {
  //   setCount((prevState) => {
  //     console.log(prevState, count);

  //     return 0;
  //   });
  // };

  const reset = useCallback(() => {
    setCount((prevState) => {
      console.log(prevState, count);

      return 0;
    });
  }, [count]);

  useEffect(() => {
    console.log("The reset function has changed.");
  }, [reset]);

  useEffect(() => {
    console.log("count", count);
  }, [count]);

  const toggle = () => {
    setColor(color === "white" ? "#ffb300" : "white");
  };

  return (
    <>
      <span className="script-title">{props.url.title}</span>
      <span className="script-border" />
      <div className="note">
        <input className="input" type="number" value={count} onChange={(e) => setCount(parseInt(e.target.value))} />
        <button className="button" onClick={reset}>
          reset
        </button>
        <button className="button" onClick={toggle}>
          toggle
        </button>
      </div>
    </>
  );
}

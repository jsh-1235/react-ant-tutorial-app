import React, { useState, useEffect } from "react";

export default function Counter({ ...props }) {
  const [count, setCount] = useState(0);

  // Dependency Array
  useEffect(() => {
    console.log(`Dependency Array count = ${count}`);

    return () => {
      console.log("Previous state", count);
    };
  }, [count]);

  const handleClick = (e) => {
    setCount(count + 1);
  };

  return (
    <>
      <span className="script-title">{props.url.title}</span>
      <span className="script-border" />
      <div className="note">
        <button className="button" onClick={handleClick}>
          {count}
        </button>
      </div>
    </>
  );
}

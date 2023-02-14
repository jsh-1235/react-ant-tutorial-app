import React, { useState, useEffect } from "react";

import StopWatch from "./StopWatch";

export default function Timer({ ...props }) {
  const [start, setStart] = useState(false);

  useEffect(() => {
    console.log(start);
  }, [start]);

  return (
    <>
      <span className="script-title">{props.url.title}</span>
      <span className="script-border" />
      <div className="note">
        {start && <StopWatch value={100} />}
        <button className="button" onClick={(e) => setStart(!start)}>
          {start ? "stop" : "start"}
        </button>
      </div>
    </>
  );
}

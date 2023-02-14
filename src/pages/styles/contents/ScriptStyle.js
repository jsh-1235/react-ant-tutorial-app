import "./ScriptStyle.css";

import React, { useState, useEffect } from "react";

import classnames from "classnames";

export default function ScriptStyle({ ...props }) {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    console.clear();

    console.log(props.url.title);

    return () => {};
  }, []);

  const handleToggle = (e) => {
    setToggle(!toggle);
  };

  return (
    <>
      <span className="script-title">{props.url.title}</span>
      <span className="script-border" />
      <div className="note">
        <button className="button small">small</button>
        <button className="button middle">middle</button>
        <button className="button large">large</button>
        <button className={classnames("button", { large: toggle })} onClick={handleToggle}>
          Toggle
        </button>
      </div>
    </>
  );
}

import React, { useState, useEffect } from "react";

import contents from "./ModuleStyle.module.css";

import classnames from "classnames";

export default function Classnames({ ...props }) {
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
        <button className={classnames("button", { [contents.small]: toggle, [contents.color]: toggle })} onClick={handleToggle}>
          Toggle
        </button>
        <button className={classnames("button", contents.small)}>Small</button>
        <button className={classnames("button", contents.middle)}>Middle</button>
        <button className={classnames("button", contents.large)}>Large</button>
        <button className={["button", contents.small].join(" ")}>Join</button>
      </div>
    </>
  );
}

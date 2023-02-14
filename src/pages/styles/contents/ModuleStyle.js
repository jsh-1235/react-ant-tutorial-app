import styles from "./ModuleStyle.module.css";

import React, { useEffect } from "react";

export default function ModuleStyle({ ...props }) {
  useEffect(() => {
    console.clear();

    console.log(props.url.title);

    return () => {};
  }, []);

  return (
    <>
      <span className="script-title">{props.url.title}</span>
      <span className="script-border" />
      <div className="note">
        <button className={["button", styles.padding].join(" ")}>Unique class name</button>
        <p className="something">global class name</p>
      </div>
    </>
  );
}

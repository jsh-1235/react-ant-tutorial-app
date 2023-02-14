import styles from "../Common.module.css";

import React, { useState } from "react";

import WithSplitting from "./WithSplitting";

const Message = WithSplitting(() => import("./Message"));

export default function CodeSplit({ ...props }) {
  const [visible, setVisible] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    // console.log(e.target.name);

    if (e.target.name === "notify") {
      import("./Notify").then(({ default: Notify }) => {
        Notify("Notify");
      });
    } else {
      setVisible(!visible);
    }
  };

  return (
    <>
      <span className="script-title">{props.url.title}</span>
      <span className="script-border" />
      <div className="note">
        <ul title="HOC">
          <li>High Order Components</li>
          <li>A higher-order component (HOC) is an advanced technique in React for reusing component logic. </li>
          <li>HOCs are not part of the React API, per se.</li>
          <li>They are a pattern that emerges from React’s compositional nature.</li>
        </ul>
      </div>
      <button className="button" name="notify " onClick={handleClick}>
        Notify (import)
      </button>
      <button className="button" name="message" onClick={handleClick}>
        Message (HOC)
      </button>
      {visible && <Message className={styles.result} message="Call me, only when you need it." />}
    </>
  );
}

import styles from "./SassStyle.module.scss";

import React, { useEffect } from "react";

export default function SassStyle({ ...props }) {
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
        <button className={styles.button}>BUTTON</button>
        <button className={styles.button} disabled>
          BUTTON
        </button>
      </div>
      <div className={styles.box_container}>
        <div className={[styles.box, styles.red].join(" ")} />
        <div className={[styles.box, styles.orange].join(" ")} />
        <div className={[styles.box, styles.yellow].join(" ")} />
        <div className={[styles.box, styles.green].join(" ")} />
        <div className={[styles.box, styles.blue].join(" ")} />
        <div className={[styles.box, styles.indigo].join(" ")} />
        <div className={[styles.box, styles.violet].join(" ")} />
      </div>
    </>
  );
}

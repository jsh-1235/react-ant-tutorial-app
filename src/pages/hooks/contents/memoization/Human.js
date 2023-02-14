import styles from "../Common.module.css";

import React, { useState, useEffect, useMemo } from "react";

export default function Human({ ...props }) {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);

  // const physical = {
  //   height: height,
  //   weight: weight,
  // };

  const physical = useMemo(() => {
    return {
      height: height,
      weight: weight,
    };
  }, [height]);

  useEffect(() => {
    console.log("height", height);
  }, [height]);

  useEffect(() => {
    console.log("weight", weight);
  }, [weight]);

  useEffect(() => {
    console.log("physical", physical);
  }, [physical]);

  return (
    <>
      <span className="script-title">{props.url.title}</span>
      <span className="script-border" />
      <div className="note">
        <div className={styles.label}>Height {`= ${physical.height}`}</div>
        <input className="input" type="number" value={height} onChange={(e) => setHeight(parseInt(e.target.value))} />
        <div className={styles.space}></div>
        <div className={styles.label}>Weight {`= ${physical.weight}`}</div>
        <input className="input" type="number" value={weight} onChange={(e) => setWeight(parseInt(e.target.value))} />
      </div>
    </>
  );
}

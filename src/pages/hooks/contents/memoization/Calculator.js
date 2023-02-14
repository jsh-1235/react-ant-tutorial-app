import styles from "../Common.module.css";

import React, { useState, useMemo } from "react";

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;

  while (Date.now() < wakeUpTime) {}
}

const hardCalculator = (number) => {
  console.log("Hard Calculator");

  sleep(1000);

  return number;
};

const easyCalculator = (number) => {
  console.log("easy Calculator");

  return number;
};

export default function Calculator({ ...props }) {
  const [hardNumber, setHardNumber] = useState(0);
  const [easyNumber, setEasyNumber] = useState(0);

  // const hardResult = hardCalculator(hardNumber);
  // const easyResult = easyCalculator(easyNumber);

  const hardResult = useMemo(() => {
    return hardCalculator(hardNumber);
  }, [hardNumber]);

  const easyResult = useMemo(() => {
    return easyCalculator(easyNumber);
  }, [easyNumber]);

  return (
    <>
      <span className="script-title">{props.url.title}</span>
      <span className="script-border" />
      <div className="note">
        <div className={styles.label}>Hard Calculator {`= ${hardResult}`}</div>
        <input className="input" type="number" value={hardNumber} onChange={(e) => setHardNumber(parseInt(e.target.value))} />
        <label className={styles.space}></label>
        <div className={styles.label}>Easy Calculator {`= ${easyResult}`}</div>
        <input className="input" type="number" value={easyNumber} onChange={(e) => setEasyNumber(parseInt(e.target.value))} />
      </div>
    </>
  );
}

// Component Optimization
// Memoization (Caching, Reuse)
// useMemo
// useCallback
// React.memo

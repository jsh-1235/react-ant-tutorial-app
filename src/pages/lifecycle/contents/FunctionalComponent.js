import React, { useState, useEffect } from "react";

import styles from "./Common.module.css";

import * as utils from "../../../lib/utility";

//===============================================================
// componentWillUpdate
//===============================================================

export default function FunctionalComponent({ ...props }) {
  const [state, setState] = useState({ number: props.number, date: props.date });

  useEffect(() => {
    // console.clear();

    utils.print("componentDidMount", "red");

    // cleanup
    return () => {
      utils.print("componentWillUnmount", "red");
    };
  }, []);

  useEffect(() => {
    utils.print(`shouldComponentUpdate + componentDidUpdate : ${state.number} ${state.date}`, "green");

    props.handleUpdate(state.number);

    return () => {
      // cleanup
      utils.print(`componentWillUnmount : ${state.number} ${state.date}`, "red");
    };
  }, [props, state]);

  const handleClick = (e) => {
    e.preventDefault();

    setState({ ...state, number: state.number + 1, date: new Date().toString() });

    // const result = Object.assign(state, { number: state.number + 1, date: new Date().toString() });

    // setState({ ...result });

    // console.log(result);
  };

  utils.print("render", "blue");

  return (
    <>
      {" "}
      <span className="script-title">{props.url.title}</span>
      <span className="script-border" />
      <span className={styles.number}>{state.number}</span>
      <span className={styles.date}>{state.date}</span>
      <button className="button" name="notify" onClick={handleClick}>
        Update
      </button>
    </>
  );
}

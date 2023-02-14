import React from "react";

import { useInput } from "./hooks";

export default function InputText({ ...props }) {
  const [value, handleChange, handleSubmit] = useInput("Hi", (value) => {
    console.log("callback", value);
  });

  return (
    <>
      <span className="script-title">{props.url.title}</span>
      <span className="script-border" />
      <div className="note">
        <input className="input" type="text" value={value} onChange={handleChange} />
        <button className="button" onClick={handleSubmit}>
          submit
        </button>
      </div>
    </>
  );
}

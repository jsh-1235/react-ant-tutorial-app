import React, { useRef } from "react";

import Input from "./Input";

export default function Field({ ...props }) {
  const inputRef = useRef();

  return (
    <>
      <span className="script-title">{props.url.title}</span>
      <span className="script-border" />
      <div className="note">
        <Input className="input" ref={inputRef} />
        <button className="button" onClick={(e) => inputRef.current.focus()}>
          focus()
        </button>
      </div>
    </>
  );
}

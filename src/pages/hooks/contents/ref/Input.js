import React, { forwardRef } from "react";

function Input(props, ref) {
  return <input className={props.className} ref={ref}></input>;
}

export default forwardRef(Input);

import React from "react";

export default function Message({ ...props }) {
  console.log(props.message);

  return <div className={props.className}>{props.message}</div>;
}

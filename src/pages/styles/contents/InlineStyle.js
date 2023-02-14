import React, { useEffect } from "react";

const InlineStyle = ({ ...props }) => {
  const style = {
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#85bb5c",
    width: "120px",
    height: "40px",
    color: "white",
    fontSize: "1rem",
    margin: "10px",
  };

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
        <button style={style}>BUTTON</button>
      </div>
    </>
  );
};

export default InlineStyle;

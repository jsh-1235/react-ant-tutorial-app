import React, { useState, useCallback, useEffect } from "react";

export const Box = ({ ...props }) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    setStyle(props.style);
    console.log(props.style);
  }, [props.style]);

  return <div style={style}></div>;
};

export default function Paper({ ...props }) {
  const [size, setSize] = useState(100);
  const [color, setColor] = useState("#43a047");

  // const createBoxStyle = () => {
  //   return {
  //     width: `${size}px`,
  //     height: `${size}px`,
  //     backgroundColor: "red",
  //   };
  // };

  const createBoxStyle = useCallback(() => {
    return {
      width: `${size}px`,
      height: `${size}px`,
      textAlign: "center",
      backgroundColor: "#29b6f6",
    };
  }, [size]);

  useEffect(() => {
    console.log("size", size);
  }, [size]);

  const toggle = () => {
    setColor(color === "#43a047" ? "#ffb300" : "#43a047");
  };

  return (
    <>
      <span className="script-title" style={{ color: color }}>
        {props.url.title}
      </span>
      <span className="script-border" />
      <div className="note">
        <input className="input" type="number" value={size} min="0" max="500" step={10} onChange={(e) => setSize(parseInt(e.target.value))} />
        <button className="button" onClick={toggle}>
          toggle
        </button>
        <Box style={createBoxStyle} />
      </div>
    </>
  );
}

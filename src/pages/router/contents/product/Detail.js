import styled from "styled-components";

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router";

const INFO = styled.div`
  padding: 10px;
  align-self: center;
  font-size: 1rem;
  text-transform: uppercase;
`;

export default function Detail() {
  const location = useLocation();
  const { id } = useParams();
  const [result, setResult] = useState("");

  useEffect(() => {
    console.log("Detail", location.pathname, id);

    setResult("");
  }, [location.pathname, id]);

  const handleClick = (e) => {
    // Dynamic Import
    import(`./DB`).then((module) => {
      console.log(module, id);

      setResult(module[`${id}`]());
    });
  };

  return (
    <div style={{ margin: "10px" }}>
      <INFO>URL : {location.pathname}</INFO>
      <INFO>ID : {id}</INFO>
      <INFO>Result : {result}</INFO>
      <button className="button" onClick={handleClick}>
        Get
      </button>
    </div>
  );
}

import styled from "styled-components";

import React, { useContext } from "react";

import { ThemeContext } from "./ThemeContext";

const black = "#005662";
const white = "#e5ffff";

const CONTAINER = styled.div`
  align-self: stretch;
  justify-self: stretch;
  background-color: ${(props) => (props.dark ? black : white)};
  color: ${(props) => (props.dark ? white : black)};
`;

const CONTENT = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 1rem;
`;

export default function Footer() {
  // Object Destructuring (객체 재구조화)
  const { dark } = useContext(ThemeContext);

  // console.log("Footer", theme);

  return (
    <CONTAINER dark={dark}>
      <CONTENT>Footer</CONTENT>
    </CONTAINER>
  );
}

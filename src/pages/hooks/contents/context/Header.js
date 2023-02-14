import styled from "styled-components";

import React, { useContext } from "react";

import { ThemeContext } from "./ThemeContext";

const black = "#29434e";
const white = "#cfd8dc";

const CONTAINER = styled.div`
  align-self: stretch;
  justify-self: stretch;
  background-color: ${(props) => (props.theme.dark ? black : white)};
  color: ${(props) => (props.theme.dark ? white : black)};
`;

const CONTENT = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 2rem;
`;

export default function Header() {
  const theme = useContext(ThemeContext);

  // console.log("Header", theme);

  return (
    <CONTAINER theme={theme}>
      <CONTENT>Header</CONTENT>
    </CONTAINER>
  );
}

import styled from "styled-components";

import React, { useContext } from "react";

import { ThemeContext } from "./ThemeContext";
import { CounterContext, CounterProvider } from "./CounterProvider";

import View from "./View";
import Buttons from "./Buttons";

const black = "#005005";
const white = "#d7ffd9";

const CONTAINER = styled.div`
  align-self: stretch;
  justify-self: stretch;
  background-color: ${(props) => (props.theme.dark ? black : white)};
  color: ${(props) => (props.theme.dark ? white : black)};
  font-size: 2rem;
  text-align: center;
`;

export default function Content() {
  const theme = useContext(ThemeContext);
  const value = useContext(CounterContext);

  console.log("Content", value);

  return (
    <CounterProvider>
      <CONTAINER theme={theme}>
        <View />
        <Buttons />
      </CONTAINER>
    </CounterProvider>
  );
}

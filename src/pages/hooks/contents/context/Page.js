import styled from "styled-components";

import React, { useState } from "react";

import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

import { ThemeContext } from "./ThemeContext";

const PAGE = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 100px 1fr 100px;
  gap: 0px 0px;
  align-content: stretch;
  justify-content: stretch;
  align-items: stretch;
  justify-items: stretch;
`;

export default function Page() {
  const [dark, setDark] = useState(false);
  return (
    <PAGE
      onClick={(e) => {
        // e.stopPropagation();
        setDark(!dark);
      }}>
      <ThemeContext.Provider value={{ dark }}>
        <Header />
      </ThemeContext.Provider>
      <ThemeContext.Provider value={{ dark: true }}>
        <Content />
      </ThemeContext.Provider>
      <ThemeContext.Provider value={{ dark }}>
        <Footer />
      </ThemeContext.Provider>
    </PAGE>
  );
}

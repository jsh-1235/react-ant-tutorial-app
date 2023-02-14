import styled, { css } from "styled-components";

import React, { useEffect } from "react";

const color = { r: 255, g: 0, b: 0 };

const HEADER = styled.span`
  padding: 20px;
  align-self: center;
  font-size: 2rem;
  text-transform: uppercase;

  ${(props) =>
    props.primary &&
    css`
      color: #6ab7ff;
    `}

  &:hover {
    ${"" /* color: #558b2f; */}
    color:rgba(${color.r}, ${color.g}, ${color.b}, 1);
    cursor: pointer;
    transition-property: color, cursor;
    transition-duration: 0.5s;
  }

  &:active {
    color: #255d00;
    transition-property: color, cursor;
    transition-duration: 0.5s;
  }
`;

const Button = styled.button`
  border: none;
  border-radius: 4px;
  background-color: #85bb5c;
  height: ${(props) => props.height || "64px"};
  color: ${(props) => props.color || "white"};
  font-size: 1rem;
  margin: 10px;

  & + button {
    margin-top: 50px;
  }

  ${(props) =>
    props.disabled
      ? css`
          background: #424242;
          color: #6d6d6d;
        `
      : css`
          &:hover {
            background-color: #558b2f;
            cursor: pointer;
            transition-property: background-color, cursor;
            transition-duration: 0.5s;
          }

          &:active {
            background-color: #255d00;
            transition-property: background-color, cursor;
            transition-duration: 0.5s;
          }
        `}
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background: ${(props) => props.color};
  border-radius: ${(props) => props.radius};
  margin: 10px;

  &:hover {
    background-color: ${(props) => {
      console.log(props.color);

      return props.color;
    }};
    opacity: 0.8;
    cursor: pointer;
    transition-property: background-color, cursor;
    transition-duration: 0.5s;
  }

  &:active {
    background-color: ${(props) => props.color};
    opacity: 0.4;
    transition-property: background-color, cursor;
    transition-duration: 0.5s;
  }
`;

const id = "1235".padStart(10, 0);

export default function StyledComponents({ ...props }) {
  useEffect(() => {
    console.clear();

    console.log(props.url.title);

    return () => {};
  }, []);

  return (
    <>
      <span className="script-title">{props.url.title}</span>
      <span className="script-border" />
      <HEADER primary>CSS-in-JS</HEADER>
      <Button>BUTTON</Button>
      <Button height={"128px"} color={"orange"}>
        BUTTON
      </Button>
      <Button disabled>BUTTON</Button>
      <Box color="#f06292" radius="10px">
        {id}
      </Box>
    </>
  );
}

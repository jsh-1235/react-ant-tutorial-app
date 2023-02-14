import styled from "styled-components";

import React from "react";

import { useCounter } from "./useCounter";

const CONTAINER = styled.div`
  font-size: 4rem;
  color: white;
`;

export default function View({ ...props }) {
  const [count] = useCounter();

  console.log("count", count);

  return <CONTAINER>{count}</CONTAINER>;
}

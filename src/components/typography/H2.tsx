import React from "react";
import styled from "styled-components";

interface H2Props {
  message: string;
}

export default function H2({ message }: H2Props) {
  return <H2Root>{message}</H2Root>;
}

const H2Root = styled("h2")({
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  margin: "0px",
});

import React from "react";
import styled from "styled-components";

interface H1Props {
  message: string;
}

export default function H1({ message }: H1Props) {
  return <H1Root>{message}</H1Root>;
}

const H1Root = styled("h1")({
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  margin: "0px",
});

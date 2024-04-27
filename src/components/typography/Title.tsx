import React from "react";
import styled from "styled-components";

interface TitleProps {
  message: string;
}

export default function Title({ message }: TitleProps) {
  return <TitleRoot>{message}</TitleRoot>;
}

const TitleRoot = styled("h3")({
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  margin: "0px",
});

import React from "react";
import styled from "styled-components";

interface BodyProps {
  message: string;
}

export default function Body({ message }: BodyProps) {
  return <BodyRoot>{message}</BodyRoot>;
}

const BodyRoot = styled("body")({
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  margin: "0px",
});

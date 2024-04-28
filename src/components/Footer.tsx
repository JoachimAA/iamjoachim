import React from "react";
import styled from "styled-components";

export default function Footer() {
  return <Root />;
}

const Root = styled("div")({
  backgroundColor: "var(--primary-color)",
  width: "100vw",
  height: "70px",
});

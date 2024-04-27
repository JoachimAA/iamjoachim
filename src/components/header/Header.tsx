import React from "react";
import styled from "styled-components";
import HeaderButton from "./HeaderButton";

export default function Header() {
  return (
    <Root>
      <HeaderButton message="Games" path="/games" />
      <HeaderButton message="Geocaching" path="/geocaching" />
    </Root>
  );
}

const Root = styled("div")({
  width: "100vw",
  height: "80px",
  backgroundColor: "var(--main-theme)",
  display: "flex",
  justifyContent: "center",
  gap: "24px",
  alignItems: "center",
});

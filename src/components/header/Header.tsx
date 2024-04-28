import React from "react";
import styled from "styled-components";
import HeaderButton from "./HeaderButton";
import { BiHome as HomeIcon } from "react-icons/bi";
import { navigate } from "gatsby";

export default function Header() {
  return (
    <Root>
      <HomeButton onClick={() => navigate("/")}>
        <HomeIcon color="var(--secondary-color)" size={30} />
      </HomeButton>
      <HeaderButtonsContainer>
        <HeaderButton message="Games" path="/games" />
        <HeaderButton message="Geocaching" path="/geocaching" />
      </HeaderButtonsContainer>
    </Root>
  );
}

const HomeButton = styled("div")({
  height: "30px",
  gridArea: "1",
  cursor: "pointer",
  width: "30px",
  justifySelf: "center",
});

const HeaderButtonsContainer = styled("div")({
  display: "flex",
  gap: "24px",
  justifyContent: "center",
});

const Root = styled("div")({
  width: "100vw",
  height: "70px",
  backgroundColor: "var(--primary-color)",
  display: "grid",
  gridTemplateColumns: "100px auto 100px",
  alignItems: "center",
});

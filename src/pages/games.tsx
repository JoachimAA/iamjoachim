import React from "react";
import PegSolitaire from "../components/games/peg-solitaire/PegSolitaire";
import styled from "styled-components";
import H2 from "../components/typography/H2";

export default function Games() {
  return (
    <ContentContainer>
      <H2 message="Peg solitaire" />
      <PegSolitaire />
    </ContentContainer>
  );
}

const ContentContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  gap: "24px",
});

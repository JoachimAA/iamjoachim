import React from "react";
import PegSolitaire from "../components/games/peg-solitaire/PegSolitaire";
import styled from "styled-components";

export default function Games() {
  return (
    <ContentContainer>
      <PegSolitaire />
    </ContentContainer>
  );
}

const ContentContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  marginTop: "24px",
});

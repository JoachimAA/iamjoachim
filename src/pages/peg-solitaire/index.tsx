import React from "react";
import styled from "styled-components";
import { HeadFC } from "gatsby";
import PegSolitaire from "../../components/games/peg-solitaire/PegSolitaire";

export default function PegSolitairePage() {
  return (
    <ContentContainer>
      <PegSolitaire />
    </ContentContainer>
  );
}

export const Head: HeadFC = () => <title>Peg Solitaire - Joachim Arthey</title>;

const ContentContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  gap: "24px",
});

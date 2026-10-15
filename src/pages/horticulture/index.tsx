import React from "react";
import styled from "styled-components";
import { navigate, HeadFC } from "gatsby";
import H2 from "../../components/typography/H2";
import PegSolitaire from "../../components/games/peg-solitaire/PegSolitaire";

export default function HorticulturePage() {
  return (
    <ContentContainer>
      <H2 message="Horticulture" />
    </ContentContainer>
  );
}

export const Head: HeadFC = () => <title>Horticulture - Joachim Arthey</title>;

const ContentContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  gap: "24px",
});

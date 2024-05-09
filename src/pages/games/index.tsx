import React from "react";
import styled from "styled-components";
import { navigate } from "gatsby";
import H2 from "../../components/typography/H2";

export default function GamesPage() {
  return (
    <ContentContainer>
      <div onClick={() => navigate("/games/peg-solitaire")}>
        <H2 message="Peg solitaire" />
      </div>
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

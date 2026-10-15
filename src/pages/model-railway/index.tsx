import React from "react";
import styled from "styled-components";
import { navigate, HeadFC } from "gatsby";
import H2 from "../../components/typography/H2";

export default function ModelRailwayPage() {
  return (
    <ContentContainer>
      <H2 message="Model railway" />
    </ContentContainer>
  );
}

export const Head: HeadFC = () => <title>Model railway - Joachim Arthey</title>;

const ContentContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  gap: "24px",
});

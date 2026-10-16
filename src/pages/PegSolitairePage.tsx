import styled from "styled-components";
import PegSolitaire from "../components/games/peg-solitaire/PegSolitaire";
import PageLayout from "../components/PageLayout";

export default function PegSolitairePage() {
  return (
    <PageLayout>
      <ContentContainer>
        <PegSolitaire />
      </ContentContainer>
    </PageLayout>
  );
}

const ContentContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  gap: "24px",
});

import styled from "styled-components";
import H2 from "../components/typography/H2";
import PageLayout from "../components/PageLayout";

export default function ModelRailwayPage() {
  return (
    <PageLayout>
      <ContentContainer>
        <H2 message="Model railway" />
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

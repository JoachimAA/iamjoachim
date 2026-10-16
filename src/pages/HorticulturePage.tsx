import styled from "styled-components";
import H2 from "../components/typography/H2";
import Body from "../components/typography/Body";
import PageLayout from "../components/PageLayout";

export default function HorticulturePage() {
  return (
    <PageLayout>
      <ContentContainer>
        <H2 message="Horticulture" />
        <Body message="Welcome to Vite" />
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

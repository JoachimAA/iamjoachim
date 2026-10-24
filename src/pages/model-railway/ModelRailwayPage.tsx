import styled from "styled-components";
import PageLayout from "../../components/layout/PageLayout";
import ModelRailwayProject from "./ModelRailwayProject";

export default function ModelRailwayPage() {
  return (
    <PageLayout>
      <ContentContainer>
        <ModelRailwayProject />
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

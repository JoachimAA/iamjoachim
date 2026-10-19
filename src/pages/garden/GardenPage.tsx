import styled from "styled-components";
import PageLayout from "../../components/PageLayout";
import LandscapingStepsProject from "./LandscapingStepsProject";
import GrassProject from "./GrassProject";
import FrontBorderProject from "./FrontBorderProject";
import PlanterProject from "./PlanterProject";

export default function GardenPage() {
  return (
    <PageLayout>
      <ContentContainer>
        <LandscapingStepsProject />
        <GrassProject />
        <FrontBorderProject />
        <PlanterProject />
      </ContentContainer>
    </PageLayout>
  );
}

const ContentContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "32px",
  width: "100%",
});

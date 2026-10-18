import styled from "styled-components";
import H2 from "../../components/typography/H2";
import Body from "../../components/typography/Body";
import PageLayout from "../../components/PageLayout";
import H3 from "../../components/typography/H3";
import ImageCarousel from "../../components/image-carousel/ImageCarousel";
import LandscapingStepsProject from "./LandscapingStepsProject";
import GrassProject from "./GrassProject";
import FrontBorderProject from "./FrontBorderProject";
import PlanterProject from "./PlanterProject";

export default function GardenPage() {
  return (
    <PageLayout>
      <ContentContainer>
        <H2 message="Garden" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
            rowGap: "32px",
          }}
        >
          <LandscapingStepsProject />
          <GrassProject />
          <FrontBorderProject />
          <PlanterProject />
        </div>
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
  width: "100%",
});

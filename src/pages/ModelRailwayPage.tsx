import styled from "styled-components";
import H2 from "../components/typography/H2";
import PageLayout from "../components/PageLayout";
import ImageCarousel, {
  type CarouselImage,
} from "../components/image-carousel/ImageCarousel";
import Body from "../components/typography/Body";
import H3 from "../components/typography/H3";

import image1 from "../assets/photos/model-railway/model-railway-1.webp";
import image2 from "../assets/photos/model-railway/model-railway-2.webp";
import image3 from "../assets/photos/model-railway/model-railway-3.webp";
import image4 from "../assets/photos/model-railway/model-railway-4.webp";
import image5 from "../assets/photos/model-railway/model-railway-5.webp";
import image6 from "../assets/photos/model-railway/model-railway-6.webp";
import image7 from "../assets/photos/model-railway/model-railway-7.webp";
import image8 from "../assets/photos/model-railway/model-railway-8.webp";
import image9 from "../assets/photos/model-railway/model-railway-9.webp";
import image10 from "../assets/photos/model-railway/model-railway-10.webp";
import image11 from "../assets/photos/model-railway/model-railway-11.webp";
import image12 from "../assets/photos/model-railway/model-railway-12.webp";
import image13 from "../assets/photos/model-railway/model-railway-13.webp";
import image14 from "../assets/photos/model-railway/model-railway-14.webp";

const modelRailwayImages: CarouselImage[] = [
  {
    src: image1,
    alt: "1",
    caption:
      "Starting on the plywood base board and strips of timber for strength",
  },
  { src: image2, alt: "2", caption: "Gluing and nailing the wood on" },
  { src: image3, alt: "3", caption: "Constructing the track" },
  { src: image4, alt: "4", caption: "Constructing the track" },
  {
    src: image5,
    alt: "5",
    caption: "Gluing cork down to go underneath the track",
  },
  // {
  //   src: image6,
  //   alt: "6",
  //   caption: "Cutting lengths of cork to go underneath the track",
  // },
  {
    src: image7,
    alt: "7",
    caption: "Cutting lengths of cork to go underneath the track",
  },
  {
    src: image8,
    alt: "8",
    caption: "Track all laid on top of the cork underlay",
  },
  { src: image9, alt: "9", caption: "Spray painting the track" },
  { src: image10, alt: "10", caption: "Track all spray painted" },
  { src: image11, alt: "11", caption: "Painting the rest of the board brown" },
  { src: image12, alt: "12", caption: "Starting to lay the ballast" },
  {
    src: image13,
    alt: "13",
    caption: "First bit of ballast laid and stuck down",
  },
  {
    src: image14,
    alt: "14",
    caption: "Welsh Pony on the line next to my scratch built platform",
  },
];

export default function ModelRailwayPage() {
  return (
    <PageLayout>
      <ContentContainer>
        <H2 message="Model railway" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
            rowGap: "32px",
          }}
        >
          <div
            style={{
              padding: "8px 0px",
              gap: "8px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <H3 message="Model railway" />
            <Body message="Description" />
          </div>
          <div>
            <ImageCarousel images={modelRailwayImages} />
          </div>
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
});

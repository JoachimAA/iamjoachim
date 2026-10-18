import styled from "styled-components";
import H2 from "../components/typography/H2";
import Body from "../components/typography/Body";
import PageLayout from "../components/PageLayout";
import H3 from "../components/typography/H3";
import type { CarouselImage } from "../components/image-carousel/ImageCarousel";

import image1 from "../assets/photos/landscaping-steps/landscaping-steps-1.webp";
import image2 from "../assets/photos/landscaping-steps/landscaping-steps-2.webp";
import image3 from "../assets/photos/landscaping-steps/landscaping-steps-3.webp";
import image4 from "../assets/photos/landscaping-steps/landscaping-steps-4.webp";
import image5 from "../assets/photos/landscaping-steps/landscaping-steps-5.webp";
import image6 from "../assets/photos/landscaping-steps/landscaping-steps-6.webp";
import image7 from "../assets/photos/landscaping-steps/landscaping-steps-7.webp";
import image8 from "../assets/photos/landscaping-steps/landscaping-steps-8.webp";
import image9 from "../assets/photos/landscaping-steps/landscaping-steps-9.webp";
import image10 from "../assets/photos/landscaping-steps/landscaping-steps-10.webp";
import image11 from "../assets/photos/landscaping-steps/landscaping-steps-11.webp";
import image12 from "../assets/photos/landscaping-steps/landscaping-steps-12.webp";
import image13 from "../assets/photos/landscaping-steps/landscaping-steps-13.webp";
import image14 from "../assets/photos/landscaping-steps/landscaping-steps-14.webp";
import image15 from "../assets/photos/landscaping-steps/landscaping-steps-15.webp";
import image16 from "../assets/photos/landscaping-steps/landscaping-steps-16.webp";

import ImageCarousel from "../components/image-carousel/ImageCarousel";

const landscapingImages: CarouselImage[] = [
  { src: image1, alt: "1" },
  { src: image2, alt: "2" },
  { src: image3, alt: "3" },
  { src: image4, alt: "4" },
  { src: image5, alt: "5" },
  { src: image6, alt: "6" },
  { src: image7, alt: "7" },
  { src: image8, alt: "8" },
  { src: image9, alt: "9" },
  { src: image10, alt: "10" },
  { src: image11, alt: "11" },
  { src: image12, alt: "12" },
  { src: image13, alt: "13" },
  { src: image14, alt: "14" },
  { src: image15, alt: "15" },
  { src: image16, alt: "16" },
];

export default function HorticulturePage() {
  return (
    <PageLayout>
      <ContentContainer>
        <H2 message="Horticulture" />
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
            <H3 message="Landscaping steps" />
            <Body message="This project was all about refurbing the entrance to the house. Before, it just consisted of some slate and big slabs on the floor, but I wanted to create some landscaped steps that sat nicely into the slope of the front garden. I came up with a plan and worked out the dimensions before getting started. Here you can see how the project progressed over the weekend, from beginning to end, transforming the entrance into some beautiful steps built into the garden, finished off with a nice border which I decided to plant some heather in." />
          </div>
          <div>
            <ImageCarousel images={landscapingImages} />
          </div>
          <div>
            <ImageCarousel images={landscapingImages} />
          </div>
          <div
            style={{
              padding: "8px 0px",
              gap: "8px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <H3 message="Landscaping steps" />
            <Body message="This project was all about refurbing the entrance to the house. Before, it just consisted of some slate and big slabs on the floor, but I wanted to create some landscaped steps that sat nicely into the slope of the front garden. I came up with a plan and worked out the dimensions before getting started. Here you can see how the project progressed over the weekend, from beginning to end, transforming the entrance into some beautiful steps built into the garden, finished off with a nice border which I decided to plant some heather in." />
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
  width: "100%",
});

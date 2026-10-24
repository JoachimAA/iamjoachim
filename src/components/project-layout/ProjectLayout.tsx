import styled from "styled-components";
import ImageCarousel, {
  type CarouselImage,
} from "../image-carousel/ImageCarousel";
import Body from "../typography/Body";
import H3 from "../typography/H3";

type ProjectLayoutProps = {
  title: string;
  description: string;
  images: CarouselImage[];
};

export default function ProjectLayout({
  title,
  description,
  images,
}: ProjectLayoutProps) {
  return (
    <ProjectContainer>
      <TextContainer>
        <H3 message={title} />
        <Body message={description} />
      </TextContainer>

      <CarouselContainer>
        <ImageCarousel images={images} />
      </CarouselContainer>
    </ProjectContainer>
  );
}

const ProjectContainer = styled("article")({
  display: "grid",
  gridTemplateColumns: "minmax(0, 3fr) minmax(0, 2fr)",
  gridTemplateAreas: '"text carousel"',
  gap: "16px",
  alignItems: "center",
  minWidth: 0,

  "&:nth-child(even)": {
    gridTemplateColumns: "minmax(0, 2fr) minmax(0, 3fr)",
    gridTemplateAreas: '"carousel text"',

    "& > div:first-child": {
      textAlign: "right",
    },
  },

  "@media (max-width: 767px)": {
    gridTemplateColumns: "minmax(0, 1fr)",
    gridTemplateAreas: '"text" "carousel"',

    "&:nth-child(even)": {
      gridTemplateColumns: "minmax(0, 1fr)",
      gridTemplateAreas: '"text" "carousel"',

      "& > div:first-child": {
        textAlign: "left",
      },
    },
  },
});

const TextContainer = styled("div")({
  gridArea: "text",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "8px",
  minWidth: 0,
});

const CarouselContainer = styled("div")({
  gridArea: "carousel",
  minWidth: 0,
});

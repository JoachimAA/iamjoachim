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
  gap: "16px",
  alignItems: "center",
  minWidth: 0,

  // align text right for right side text
  "&:nth-child(even) > div:first-child": {
    textAlign: "right",
  },

  "&:nth-child(even)": {
    gridTemplateColumns: "minmax(0, 2fr) minmax(0, 3fr)",

    "& > div:first-child": {
      order: 2,
    },

    "& > div:last-child": {
      order: 1,
    },
  },

  "@media (max-width: 767px)": {
    gridTemplateColumns: "minmax(0, 1fr)",

    "&:nth-child(even)": {
      gridTemplateColumns: "minmax(0, 1fr)",
    },

    "& > div:first-child, & > div:last-child": {
      order: "unset",
    },
  },
});

const TextContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "8px",
  minWidth: 0,
});

const CarouselContainer = styled("div")({
  minWidth: 0,
});

import { type CarouselImage } from "../../components/image-carousel/ImageCarousel";

import image1 from "../../assets/photos/grass/grass-1.webp";
import image2 from "../../assets/photos/grass/grass-2.webp";
import image3 from "../../assets/photos/grass/grass-3.webp";
import image4 from "../../assets/photos/grass/grass-4.webp";
import image5 from "../../assets/photos/grass/grass-5.webp";
import image6 from "../../assets/photos/grass/grass-6.webp";
import image7 from "../../assets/photos/grass/grass-7.webp";
import image8 from "../../assets/photos/grass/grass-8.webp";
import image9 from "../../assets/photos/grass/grass-9.webp";
import image10 from "../../assets/photos/grass/grass-10.webp";
import image11 from "../../assets/photos/grass/grass-11.webp";
import ProjectLayout from "../../components/project-layout/ProjectLayout";

const grassImages: CarouselImage[] = [
  { src: image1, alt: "1", caption: "Everything ready to begin" },
  {
    src: image2,
    alt: "2",
    caption: "Border marked out and ready to begin laying the top soil",
  },
  { src: image3, alt: "3", caption: "Laying the top soil" },
  { src: image4, alt: "4", caption: "Creating the edge border" },
  { src: image5, alt: "5", caption: "Starting to lay the grass seed" },
  { src: image6, alt: "6", caption: "Grass seed all down" },
  {
    src: image7,
    alt: "7",
    caption: "Laying the paving slaps to get an eye for spacing and distance",
  },
  {
    src: image8,
    alt: "8",
    caption: "Laying the landscaping fabric beneath the paving slaps",
  },
  { src: image9, alt: "9", caption: "All ready for the gravel to be laid" },
  {
    src: image10,
    alt: "10",
    caption: "Gravel laid all ready for the grass to grow",
  },
  {
    src: image11,
    alt: "11",
    caption: "Grass growing and starting to fill out",
  },
];

export default function GrassProject() {
  return (
    <ProjectLayout
      title="Grass"
      images={grassImages}
      description="This was a small project to grass a small area and lay some slabs with gravel around them to help reduce weed growth and make the area look a bit nicer. It was an area that needed constant maintenance to keep clear, so this was a way to make it easier to look after. This was the second time I had attempted to grass an area, and it was very successful."
    />
  );
}

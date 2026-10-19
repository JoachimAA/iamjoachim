import { type CarouselImage } from "../../components/image-carousel/ImageCarousel";

import image1 from "../../assets/photos/front-border/front-border-1.webp";
import image2 from "../../assets/photos/front-border/front-border-2.webp";
import image3 from "../../assets/photos/front-border/front-border-3.webp";
import image4 from "../../assets/photos/front-border/front-border-4.webp";
import image5 from "../../assets/photos/front-border/front-border-5.webp";
import image6 from "../../assets/photos/front-border/front-border-6.webp";
import image7 from "../../assets/photos/front-border/front-border-7.webp";
import image8 from "../../assets/photos/front-border/front-border-8.webp";
import image9 from "../../assets/photos/front-border/front-border-9.webp";
import image10 from "../../assets/photos/front-border/front-border-10.webp";
import image11 from "../../assets/photos/front-border/front-border-11.webp";
import image12 from "../../assets/photos/front-border/front-border-12.webp";
import image13 from "../../assets/photos/front-border/front-border-13.webp";
import ProjectLayout from "../../components/project-layout/ProjectLayout";

const frontBorderImages: CarouselImage[] = [
  { src: image1, alt: "1", caption: "Before work started" },
  {
    src: image2,
    alt: "2",
    caption:
      "Painting the sleepers with bitumen paint to help protect the wood from moisture and extend its lifespan.",
  },
  {
    src: image3,
    alt: "3",
    caption: "Laying a string to get an idea of size for the border",
  },
  {
    src: image4,
    alt: "4",
    caption: "Digging out the grass ready for the new border",
  },
  {
    src: image5,
    alt: "5",
    caption: "Fibre optic cable that needed being careful of",
  },
  {
    src: image6,
    alt: "6",
    caption: "Laying gravel ready for the sleepers to sit on and for drainage",
  },
  {
    src: image7,
    alt: "7",
    caption: "Laying sheeting to protect the sleepers from moisture",
  },
  {
    src: image8,
    alt: "8",
    caption: "Drilling in the stakes that will hold the sleepers in place",
  },
  {
    src: image9,
    alt: "9",
    caption: "Backfilling the sleepers with gravel to assist with drainage",
  },
  {
    src: image10,
    alt: "10",
    caption: "Filling in with soil ready for planting",
  },
  { src: image11, alt: "11", caption: "Arranging plants ready for planting" },
  { src: image12, alt: "12", caption: "Arranging plants ready for planting" },
  { src: image13, alt: "13", caption: "The finished front border!" },
];

export default function FrontBorderProject() {
  return (
    <ProjectLayout
      title="Front border"
      images={frontBorderImages}
      description="This project was all about tidying up the front border along the path and road outside my house. Due to the small slope down towards the path, I decided to use some large sleepers to create a small wall between the grass and path, while also creating a border for some plants. This was my first time using sleepers in a project, so it was something new and exciting to try. It was a bit challenging as I had to be careful not to disturb the fibre optic line that ran from the path up the lawn to the house. The biggest challenge was getting the sleepers aligned properly with each other, but the final outcome looked amazing and created a really nice front border."
    />
  );
}

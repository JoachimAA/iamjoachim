import ImageCarousel, {
  type CarouselImage,
} from "../../components/image-carousel/ImageCarousel";
import Body from "../../components/typography/Body";
import H3 from "../../components/typography/H3";

import image1 from "../../assets/photos/landscaping-steps/landscaping-steps-1.webp";
import image2 from "../../assets/photos/landscaping-steps/landscaping-steps-2.webp";
import image3 from "../../assets/photos/landscaping-steps/landscaping-steps-3.webp";
import image4 from "../../assets/photos/landscaping-steps/landscaping-steps-4.webp";
import image5 from "../../assets/photos/landscaping-steps/landscaping-steps-5.webp";
import image6 from "../../assets/photos/landscaping-steps/landscaping-steps-6.webp";
import image7 from "../../assets/photos/landscaping-steps/landscaping-steps-7.webp";
import image8 from "../../assets/photos/landscaping-steps/landscaping-steps-8.webp";
import image9 from "../../assets/photos/landscaping-steps/landscaping-steps-9.webp";
import image10 from "../../assets/photos/landscaping-steps/landscaping-steps-10.webp";
import image11 from "../../assets/photos/landscaping-steps/landscaping-steps-11.webp";
import image12 from "../../assets/photos/landscaping-steps/landscaping-steps-12.webp";
import image13 from "../../assets/photos/landscaping-steps/landscaping-steps-13.webp";
import image14 from "../../assets/photos/landscaping-steps/landscaping-steps-14.webp";
import image15 from "../../assets/photos/landscaping-steps/landscaping-steps-15.webp";
import image16 from "../../assets/photos/landscaping-steps/landscaping-steps-16.webp";
import ProjectLayout from "../../components/project-layout/ProjectLayout";

const landscapingImages: CarouselImage[] = [
  { src: image1, alt: "1", caption: "Before work started" },
  {
    src: image2,
    alt: "2",
    caption: "Measuring out lengths to string out the steps outline",
  },
  { src: image3, alt: "3", caption: "The plan strung out really to begin!" },
  { src: image4, alt: "4", caption: "Getting started on the first step" },
  { src: image5, alt: "5", caption: "Making sure its all level" },
  { src: image6, alt: "6", caption: "Pinning in the first step" },
  {
    src: image7,
    alt: "7",
    caption: "Cutting up the wood planks into lengths with the mitre saw",
  },
  { src: image8, alt: "8", caption: "Progress with the 2nd step going in" },
  {
    src: image9,
    alt: "9",
    caption:
      "Applying cut end preserver to help protect the exposed ends of the timber from moisture and rot.",
  },
  // { src: image10, alt: "10" },
  {
    src: image11,
    alt: "11",
    caption: "All the steps in place with the sub-base laid",
  },
  { src: image12, alt: "12", caption: "Heathers planted around the edge" },
  { src: image13, alt: "13", caption: "Laying out the gravel on top" },
  { src: image14, alt: "14", caption: "The steps all finished!" },
  // { src: image15, alt: "15" },
  // { src: image16, alt: "16" },
];

export default function LandscapingStepsProject() {
  return (
    <ProjectLayout
      title="Landscaping steps"
      description="This project was all about refurbing the entrance to the house. Before, it just consisted of some slate and big slabs on the floor, but I wanted to create some landscaped steps that sat nicely into the slope of the front garden. I came up with a plan and worked out the dimensions before getting started. Here you can see how the project progressed over the weekend, from beginning to end, transforming the entrance into some beautiful steps built into the garden, finished off with a nice border which I decided to plant some heather in."
      images={landscapingImages}
    />
  );
}

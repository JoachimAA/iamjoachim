import ImageCarousel, {
  type CarouselImage,
} from "../../components/image-carousel/ImageCarousel";
import Body from "../../components/typography/Body";
import H3 from "../../components/typography/H3";

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

const frontBorderImages: CarouselImage[] = [
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
];

export default function FrontBorderProject() {
  return (
    <>
      <div
        style={{
          padding: "8px 0px",
          gap: "8px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <H3 message="Front border" />
        <Body message="Description" />
      </div>
      <div>
        <ImageCarousel images={frontBorderImages} />
      </div>
    </>
  );
}

import ImageCarousel, {
  type CarouselImage,
} from "../../components/image-carousel/ImageCarousel";
import Body from "../../components/typography/Body";
import H3 from "../../components/typography/H3";

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

const grassImages: CarouselImage[] = [
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
];

export default function GrassProject() {
  return (
    <>
      <div>
        <ImageCarousel images={grassImages} />
      </div>
      <div
        style={{
          padding: "8px 0px",
          gap: "8px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <H3 message="Grass" />
        <Body message="description" />
      </div>
    </>
  );
}

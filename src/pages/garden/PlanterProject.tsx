import { type CarouselImage } from "../../components/image-carousel/ImageCarousel";

import image1 from "../../assets/photos/planter/planter-1.webp";
import image2 from "../../assets/photos/planter/planter-2.webp";
import image3 from "../../assets/photos/planter/planter-3.webp";
import image4 from "../../assets/photos/planter/planter-4.webp";
import image5 from "../../assets/photos/planter/planter-5.webp";
import image6 from "../../assets/photos/planter/planter-6.webp";
import image7 from "../../assets/photos/planter/planter-7.webp";
import image8 from "../../assets/photos/planter/planter-8.webp";
import image9 from "../../assets/photos/planter/planter-9.webp";
import image10 from "../../assets/photos/planter/planter-10.webp";
import ProjectLayout from "../../components/project-layout/ProjectLayout";

const planterImages: CarouselImage[] = [
  {
    src: image1,
    alt: "1",
    caption: "Cutting up the decking into lengths ready for assembly",
  },
  {
    src: image2,
    alt: "2",
    caption:
      "Applying cut end preserver to help protect against moisture and rot",
  },
  { src: image3, alt: "3", caption: "Assembling a planter" },
  // { src: image4, alt: "4" },
  { src: image5, alt: "5", caption: "Three assembled planters" },
  { src: image6, alt: "6", caption: "Creating the cross frame" },
  {
    src: image8,
    alt: "8",
    caption: "The finished frame ready for the planters",
  },
  { src: image7, alt: "7", caption: "The finished frame with the planters on" },
  {
    src: image9,
    alt: "9",
    caption:
      "Filling the planters with gravel for drainage after adding some protective sheeting",
  },

  { src: image10, alt: "10", caption: "All finished" },
];

export default function PlanterProject() {
  return (
    <ProjectLayout
      title="Planter"
      images={planterImages}
      description="After seeing lots of planters like this at various garden centres, I thought I'd have a go at making one myself. I used decking to create a nice pattern on the outside of each planter. The end result was pretty heavy, but luckily, the way I designed it meant I could lift each planter off the stand separately. This was something a lot of the ones I'd seen at garden centres didn't allow for. It also meant I could make it to a bespoke size to fit my space. Overall, it worked out really well, and it now houses my strawberry plants and herbs."
    />
  );
}

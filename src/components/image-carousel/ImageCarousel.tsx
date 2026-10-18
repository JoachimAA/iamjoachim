import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import styled from "styled-components";

export type CarouselImage = {
  src: string;
  alt: string;
};

type ImageCarouselProps = {
  images: CarouselImage[];
  options?: EmblaOptionsType;
};

export default function ImageCarousel({ images, options }: ImageCarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);

  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      emblaMainApi?.scrollTo(index);
    },
    [emblaMainApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi) return;

    const index = emblaMainApi.selectedScrollSnap();

    setSelectedIndex(index);
    emblaThumbsApi?.scrollTo(index);
  }, [emblaMainApi, emblaThumbsApi]);

  useEffect(() => {
    if (!emblaMainApi) return;

    onSelect();

    emblaMainApi.on("select", onSelect);
    emblaMainApi.on("reInit", onSelect);

    return () => {
      emblaMainApi.off("select", onSelect);
      emblaMainApi.off("reInit", onSelect);
    };
  }, [emblaMainApi, onSelect]);

  return (
    <Carousel>
      <MainViewport ref={emblaMainRef}>
        <MainSlides>
          {images.map((image, index) => (
            <MainSlide key={`${image.src}-${index}`}>
              <img src={image.src} alt={image.alt} />
            </MainSlide>
          ))}
        </MainSlides>
      </MainViewport>

      {images.length > 1 && (
        <Thumbs>
          <ThumbsViewport ref={emblaThumbsRef}>
            <ThumbsSlides>
              {images.map((image, index) => (
                <ThumbSlide key={`${image.src}-${index}`}>
                  <ThumbButton
                    type="button"
                    $selected={index === selectedIndex}
                    onClick={() => onThumbClick(index)}
                    aria-label={`View image ${index + 1}: ${image.alt}`}
                    aria-current={index === selectedIndex ? "true" : undefined}
                  >
                    <img src={image.src} alt="" />
                  </ThumbButton>
                </ThumbSlide>
              ))}
            </ThumbsSlides>
          </ThumbsViewport>
        </Thumbs>
      )}
    </Carousel>
  );
}

const Carousel = styled("div")({
  width: "100%",
  maxWidth: "800px",
  minWidth: "0",
});

const MainViewport = styled("div")({
  overflow: "hidden",
  width: "100%",
  borderRadius: "8px",
});

const MainSlides = styled("div")({
  display: "flex",
  touchAction: "pan-y pinch-zoom",
});

const MainSlide = styled("div")({
  flex: "0 0 100%",
  minWidth: "0",

  "& img": {
    display: "block",
    width: "100%",
    aspectRatio: "4 / 3",
    objectFit: "cover",
    borderRadius: "8px",
  },
});

const Thumbs = styled("div")({
  marginTop: "10px",
});

const ThumbsViewport = styled("div")({
  overflow: "hidden",
  width: "100%",
});

const ThumbsSlides = styled("div")({
  display: "flex",
  gap: "8px",
  touchAction: "pan-y pinch-zoom",
});

const ThumbSlide = styled("div")({
  flex: "0 0 22%",
  minWidth: "0",
});

const ThumbButton = styled("button")<{ $selected: boolean }>(
  ({ $selected }) => ({
    display: "block",
    width: "100%",
    padding: 0,
    border: `2px solid ${$selected ? "#47734b" : "transparent"}`,
    borderRadius: "5px",
    overflow: "hidden",
    background: "transparent",
    cursor: "pointer",
    opacity: $selected ? 1 : 0.65,
    transition: "opacity 0.2s ease, border-color 0.2s ease",

    "&:hover": {
      opacity: 1,
    },

    "&:focus-visible": {
      outline: "2px solid #47734b",
      outlineOffset: "2px",
    },

    "& img": {
      display: "block",
      width: "100%",
      height: "55px",
      objectFit: "cover",
    },
  })
);

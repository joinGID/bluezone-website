import AboutCarousel from "@/src/modules/about/container/AboutCarousel";
import GalleryGrid from "@/src/modules/gallery/components/GalleryGrid";

export const metadata = {
  title: "Gallery",
  description: "Explore the visual beauty of BlueZone. Architecture, interiors, and the community lifestyle in Manjeri.",
};

export default function Gallery() {

    return (
        <div>
            <AboutCarousel />
            <GalleryGrid/>
        </div>
    );
}
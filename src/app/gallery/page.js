
import GalleryGrid from "@/src/modules/gallery/components/GalleryGrid";

export const metadata = {
  title: "Gallery — Architecture & Interior Photos",
  description:
    "Browse stunning photos and videos of BlueZone Habitat villas in Manjeri. Explore architecture, interiors, landscaping, and community lifestyle.",
  openGraph: {
    title: "Gallery | BlueZone Habitat",
    description:
      "Explore the visual beauty of BlueZone Habitat — architecture, interiors, and serene surroundings in Manjeri, Kerala.",
  },
};

export default function Gallery() {

    return (
        <div>
            
            <GalleryGrid/>
        </div>
    );
}
// /constants/GalleryImages.js
export const GalleryByType = {
  interior: [
    {
      name: "luxuryBathroom",
      url: "https://images.pexels.com/photos/1457841/pexels-photo-1457841.jpeg",
    },
    {
      name: "modernInterior",
      url:
        "https://images.pexels.com/photos/1457841/pexels-photo-1457841.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1500&w=2000",
    },
  ],

  exterior: [
    {
      name: "whiteVilla",
      url: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
    },
    {
      name: "modernCourtyard",
      url: "https://images.pexels.com/photos/1374124/pexels-photo-1374124.jpeg",
    },
    {
      name: "minimalHouse",
      url: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg",
    },
    {
      name: "grayFacade",
      url: "https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg",
    },
    {
      name: "coastalVilla",
      url:
        "https://images.pexels.com/photos/2611015/pexels-photo-2611015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1500&w=2000",
    },
  ],

  architecture: [
    {
      name: "stairsTower",
      url: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg",
    },
    {
      name: "cityNightscape",
      url:
        "https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1500&w=2000",
    },
  ],
};

// Optional convenience flat map if you still reference GalleryImages.whatever elsewhere:
export const GalleryImages = Object.fromEntries(
  Object.values(GalleryByType).flat().map((item) => [item.name, item.url])
);
import { rooms } from "../modules/rooms/constants/roomConstants";

export default function sitemap() {
  const baseUrl = "https://bluezonehabitat.com";

  // Static routes
  const routes = ["", "/gallery", "/rooms"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  // Dynamic room routes
  const roomRoutes = rooms.map((room) => ({
    url: `${baseUrl}/rooms/${room.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...routes, ...roomRoutes];
}

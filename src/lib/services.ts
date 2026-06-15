import data from "@/content/services.json";
import houseShifting from "@/assets/services/house-shifting.png";
import office from "@/assets/services/office-relocation.png";
import packing from "@/assets/services/packing.png";
import loading from "@/assets/services/loading.png";
import warehouse from "@/assets/services/warehouse.png";
import cargo from "@/assets/services/cargo.png";
import goods from "@/assets/services/goods-transport.png";
import truckRent from "@/assets/services/truck-rent.png";
import carCarrier from "@/assets/services/car-carrier.png";

export const SERVICE_ICONS: Record<string, string> = {
  "house-shifting": houseShifting,
  "office-relocation": office,
  packing,
  loading,
  warehouse,
  cargo,
  "goods-transport": goods,
  "truck-rent": truckRent,
  "car-carrier": carCarrier,
};

export type ServiceFeature = { title: string; desc: string };
export type ServiceStep = { step: string; desc: string };
export type ServiceFAQ = { q: string; a: string };

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  icon: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  intro: string;
  features: ServiceFeature[];
  process: ServiceStep[];
  faqs: ServiceFAQ[];
};

export const SERVICES: Service[] = data.services as Service[];

export const getService = (slug: string): Service | undefined =>
  SERVICES.find((s) => s.slug === slug);

export const getServiceIcon = (icon: string): string =>
  SERVICE_ICONS[icon] ?? houseShifting;

const P = (name: string) => `/photos/${name}`;

export const SERVICE_PHOTOS: Record<string, { heroImage: string; gallery: string[] }> = {
  "house-shifting": {
    heroImage: P("house-shifting-garden.jpeg"),
    gallery: [
      P("house-shifting-home.jpeg"),
      P("house-delivery.jpeg"),
      P("worker-carrying-cabinet.jpeg"),
    ],
  },
  "office-relocation": {
    heroImage: P("office-packing.jpeg"),
    gallery: [
      P("packing-house-full.jpeg"),
      P("packing-bedroom.jpeg"),
      P("loading-wardrobe-2.jpeg"),
    ],
  },
  "packing": {
    heroImage: P("packing-house-full.jpeg"),
    gallery: [
      P("packed-boxes.jpeg"),
      P("packing-sofa-apt.jpeg"),
      P("packing-sofa-room.jpeg"),
    ],
  },
  "loading-unloading": {
    heroImage: P("loading-wardrobe-1.jpeg"),
    gallery: [
      P("loading-wardrobe-2.jpeg"),
      P("loading-glass-panel.jpeg"),
      P("loading-wardrobe-3.jpeg"),
    ],
  },
  "warehouse": {
    heroImage: P("packed-boxes.jpeg"),
    gallery: [
      P("team-truck.jpeg"),
      P("loading-mattress-1.jpeg"),
      P("packing-house-full.jpeg"),
    ],
  },
  "cargo": {
    heroImage: P("cargo-loading-box.jpeg"),
    gallery: [
      P("team-truck.jpeg"),
      P("loading-mattress-2.jpeg"),
      P("truck-rear-branded.jpeg"),
    ],
  },
  "goods-transport": {
    heroImage: P("team-truck.jpeg"),
    gallery: [
      P("loading-mattress-1.jpeg"),
      P("cargo-loading-box.jpeg"),
      P("loading-wardrobe-3.jpeg"),
    ],
  },
  "truck-on-rent": {
    heroImage: P("truck-rent-parked.jpeg"),
    gallery: [
      P("truck-rent-highway.jpeg"),
      P("truck-rent-white.jpeg"),
      P("truck-rent-fleet.jpeg"),
    ],
  },
  "car-carrier": {
    heroImage: P("car-carrier-two-cars.jpeg"),
    gallery: [
      P("car-carrier-hero.jpeg"),
      P("car-carrier-flatbed.jpeg"),
      P("car-carrier-transport.jpeg"),
    ],
  },
};

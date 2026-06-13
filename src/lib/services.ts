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

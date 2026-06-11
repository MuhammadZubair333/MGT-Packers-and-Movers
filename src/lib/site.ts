export const SITE = {
  name: "MGT Packers & Movers",
  legal: "Majid Goods Transport Company",
  owner: "Haji Majid Ali",
  phonePrimary: "0300-1699303",
  phoneSecondary: "0300-1899303",
  phoneTertiary: "0345-1997531",
  whatsapp: "923001899303",
  email: "mgtpackersmovers@gmail.com",
  website: "www.mgtpackersmovers.com",
  address:
    "Plot # D-425, Sec 31-E, Lucknow Co-operative Housing Society, UMDC Road, Korangi, Karachi",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    tiktok: "https://tiktok.com",
  },
};

export const telHref = (n: string) => `tel:+92${n.replace(/[^0-9]/g, "").replace(/^0/, "")}`;
export const waHref = (msg = "Hi MGT, I'd like a moving quote.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

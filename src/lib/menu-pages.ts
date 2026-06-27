import { images, site } from "./content"

export type MenuPage = {
  slug: string
  title: string
  url: string
  image: string
  content: string
}

export const menuPages = [
  {
    slug: "burritos",
    title: "Burritos",
    url: site.orderUrl,
    image: images.pasta,
    content:
      "BURRITOS Choose a tortilla, rice, beans, protein, salsa, fresh toppings, and sauces. Popular builds include grilled chicken burrito, steak burrito, veggie burrito, carnitas-style burrito, and shrimp burrito. Add guacamole, queso, chips, or a drink to complete the meal."
  },
  {
    slug: "bowls",
    title: "Bowls",
    url: site.orderUrl,
    image: images.plate,
    content:
      "BOWLS Start with rice, greens, or both. Add beans, protein, fajita vegetables, salsa, cheese, crema, guacamole, and Moho sauces. Build a lighter lunch bowl or a loaded dinner bowl with chips on the side."
  },
  {
    slug: "tacos",
    title: "Tacos",
    url: site.orderUrl,
    image: images.oysters,
    content:
      "TACOS Soft tortillas filled with your choice of protein, fresh toppings, salsa, and sauce. Mix chicken, steak, shrimp, veggie, and classic Mexican grill flavors. Order a few for yourself or build a spread for the table."
  },
  {
    slug: "quesadillas",
    title: "Quesadillas",
    url: site.orderUrl,
    image: images.wineRoom,
    content:
      "QUESADILLAS Toasted tortillas with melted cheese and your choice of fillings. Add chicken, steak, vegetables, salsa, sour cream, guacamole, or chips for a full meal."
  },
  {
    slug: "catering-menu",
    title: "Catering Menu",
    url: site.cateringExternalUrl,
    image: images.cateringHero,
    content:
      "CATERING MENU Fresh Mexican grill catering for offices, parties, meetings, and family gatherings. Build group orders with tacos, bowls, proteins, rice, beans, toppings, sauces, chips, and sides. Order catering online or contact Moho for help planning your event."
  }
] satisfies MenuPage[]

export function getMenuPage(slug: string) {
  return menuPages.find((page) => page.slug === slug)
}

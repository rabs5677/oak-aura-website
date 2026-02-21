import catSofas from "@/assets/cat-sofas.jpg";
import catBeds from "@/assets/cat-beds.jpg";
import catDining from "@/assets/cat-dining.jpg";
import catTvUnits from "@/assets/cat-tv-units.jpg";
import catCoffeeTables from "@/assets/cat-coffee-tables.jpg";
import catCabinets from "@/assets/cat-cabinets.jpg";
import catMattresses from "@/assets/cat-mattresses.jpg";
import catWardrobes from "@/assets/cat-wardrobes.jpg";
import catSofaCumBed from "@/assets/cat-sofa-cum-bed.jpg";
import catBookshelves from "@/assets/cat-bookshelves.jpg";
import catStudyTables from "@/assets/cat-study-tables.jpg";
import catKitchenCabinets from "@/assets/cat-kitchen-cabinets.jpg";

export interface Category {
  name: string;
  slug: string;
  image: string;
}

export const categories: Category[] = [
  { name: "Sofas", slug: "sofas", image: catSofas },
  { name: "Beds", slug: "beds", image: catBeds },
  { name: "Dining", slug: "dining", image: catDining },
  { name: "TV Units", slug: "tv-units", image: catTvUnits },
  { name: "Coffee Tables", slug: "coffee-tables", image: catCoffeeTables },
  { name: "Cabinets", slug: "cabinets", image: catCabinets },
  { name: "Mattresses", slug: "mattresses", image: catMattresses },
  { name: "Wardrobes", slug: "wardrobes", image: catWardrobes },
  { name: "Sofa Cum Bed", slug: "sofa-cum-bed", image: catSofaCumBed },
  { name: "Bookshelves", slug: "bookshelves", image: catBookshelves },
  { name: "Study Tables", slug: "study-tables", image: catStudyTables },
  { name: "Kitchen Cabinets", slug: "kitchen-cabinets", image: catKitchenCabinets },
];

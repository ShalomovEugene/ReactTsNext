import CoursesIcon from "./icons/courses.svg";
import BooksIcon from "./icons/books.svg";
import ServicesIcon from "./icons/services.svg";
import ProductsIcon from "./icons/products.svg";
import { TopLevelCategory } from "../interfaces/page.interface";
import { IFirstLevelMenuItem } from "../interfaces/menu.interface";

export const firstLevelMenu: IFirstLevelMenuItem[] = [
  {
    route: "courses",
    name: "Courses",
    icon: <CoursesIcon />,
    id: TopLevelCategory.Courses,
  },
  {
    route: "services",
    name: "Services",
    icon: <ServicesIcon />,
    id: TopLevelCategory.Services,
  },
  {
    route: "books",
    name: "Books",
    icon: <BooksIcon />,
    id: TopLevelCategory.Books,
  },
  {
    route: "products",
    name: "Products",
    icon: <ProductsIcon />,
    id: TopLevelCategory.Products,
  },
];

export const priceUa = (price: number): string =>
  price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    .concat(" ₴");

export const decOfNum = (number: number, titles: [string, string]): string => {
  // ru version
  // const cases = [2, 0, 1, 1, 1, 2];
  // return titles[
  //   number % 100 > 4 && number % 100 < 20
  //     ? 2
  //     : cases[number % 10 < 5 ? number % 10 : 5]
  // ];

  // eng version
  if (number > 1) return titles[1];
  return titles[0];
};

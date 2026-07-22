
import type { ReactElement } from "react";

export interface NavItems {
  icon: ReactElement;
  link: string;
  id: number;
  name: string
}

export interface IGetProducts {
  id: number;
  img: string;
  name: string;
  price: number;
  sale: number;
  stock: number;
}


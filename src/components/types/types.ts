import type { Role } from "@/lib/configs/rolePermissions";
import type { ReactElement } from "react";

export interface NavItems {
  icon: ReactElement;
  link: string;
  id: number;
  name: string;
  roles?: Role[] | Role;
}

export interface IGetProducts {
  id: number;
  img: string;
  name: string;
  price: number;
  sale: number;
  stock: number;
}

export interface IDeleteProduct {
  id: number;
}
export interface ICreatProduct {
  img: string;
  name: string;
  price: number;
  sale: number;
  stock: number;
}
export interface IEditProduct {
  img: string;
  name: string;
  price: number;
  sale: number;
  stock: number;
}

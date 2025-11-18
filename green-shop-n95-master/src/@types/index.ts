import type { ReactNode } from "react";

export interface PropTypes {
  children: ReactNode;
}

export interface LoginType {
  email: string;
  password: string;
}

export interface RegisterType {
  email: string;
  name: string;
  password: string;
  second_password: string;
  surname: string;
}

export interface ShowcaseCarouselType {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  buttonText: string;
  big_img_url: string;
  small_img_url: string;
}

export interface DataType<T> {
  isLoading: boolean;
  isError: boolean;
  data?: T;
}

export interface CategoryType {
  count: number;
  created_at: string;
  created_by: string;
  route_path: string;
  title: string;
  _id: string;
}

export interface DiscountType {
  id: number;
  title: string;
  discoount_up_to: number;
  poster_image_url: string;
}

export interface ProductType {
  category: string;
  comments: string[];
  created_at: string;
  created_by: string;
  description: string;
  detailed_images: string[];
  discount: boolean;
  discount_price: string;
  main_image: string;
  price: number;
  rate: number;
  short_description: string;
  sold_times: number;
  tags: string[];
  title: string;
  views: number;
  _id: string;
  count?: number;
  userPrice?: number;
}

export interface PlantsType {
  id: number;
  title: string;
  path: string;
}

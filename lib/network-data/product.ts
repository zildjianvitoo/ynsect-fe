import { axiosInstance } from "../axiosInstance";
import {
  GetAllProductsResponse,
  GetProductByIdResponse,
} from "@/types/product";

export async function getAllProducts() {
  const { data } = await axiosInstance.get<GetAllProductsResponse>("/products");
  return { data: data.data };
}

export async function getProductById({ productId }: { productId: string }) {
  const { data } = await axiosInstance.get<GetProductByIdResponse>(
    `/products/${productId}`,
  );
  return { data: data.data };
}

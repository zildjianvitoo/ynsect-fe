import { axiosInstance } from "../axiosInstance";
import {
  GetAllProductsResponse,
  GetProductByIdResponse,
} from "@/types/product";

export async function getAllProducts() {
  try {
    const { data } =
      await axiosInstance.get<GetAllProductsResponse>("/products");
    return { data: data.data };
  } catch (error) {
    return { error };
  }
}

export async function getForumById({ productId }: { productId: string }) {
  try {
    const { data } = await axiosInstance.get<GetProductByIdResponse>(
      `/products/${productId}`,
    );
    return { data: data.data };
  } catch (error) {
    return { error };
  }
}

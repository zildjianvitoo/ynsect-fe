import { GetCartByUserIdResponse, ProductToCartParams } from "@/types/cart";
import { axiosInstance } from "../axiosInstance";

export async function getCartByUserId({ userId }: { userId: string }) {
  const { data } = await axiosInstance.get<GetCartByUserIdResponse>(
    `/carts/${userId}`,
  );
  return { data: data.data };
}

export async function deleteCartByUserId({ userId }: { userId: string }) {
  const { data } = await axiosInstance.delete(`/carts/${userId}`);
  return { data: data.data };
}

export async function addProductToCart({
  userId,
  productId,
}: ProductToCartParams) {
  const { data } = await axiosInstance.post(`/carts/${userId}/add`, {
    productId,
  });
  return { data: data.data };
}

export async function decreaseProductFromCart({
  userId,
  productId,
}: ProductToCartParams) {
  const { data } = await axiosInstance.post(`/carts/${userId}/decrease`, {
    productId,
  });
  return { data: data.data };
}

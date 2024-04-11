import { GetCartByUserIdResponse, ProductToCartParams } from "@/types/cart";
import { axiosInstance } from "../axiosInstance";
import { getSession } from "next-auth/react";

async function getUserToken() {
  const data = await getSession();
  return data?.user.token;
}

export async function getCartByUserId({ userId }: { userId: number }) {
  const { data } = await axiosInstance.get<GetCartByUserIdResponse>(
    `/carts/${userId}`,
    {
      headers: {
        authorization: `${await getUserToken()}`,
      },
    },
  );
  return { data: data.data };
}

export async function deleteCartByUserId({ userId }: { userId: number }) {
  const { data } = await axiosInstance.delete(`/carts/${userId}`, {
    headers: {
      authorization: `${await getUserToken()}`,
    },
  });
  return { data: data.data };
}

export async function addProductToCart({
  userId,
  productId,
}: ProductToCartParams) {
  const { data } = await axiosInstance.post(
    `/carts/${userId}/add`,
    {
      productId,
    },
    {
      headers: {
        authorization: `${await getUserToken()}`,
      },
    },
  );
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

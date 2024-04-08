import { CreateOrderResponse, UpdateOrderStatusResponse } from "@/types/order";
import { axiosInstance } from "../axiosInstance";

export async function createOrder({ userId }: { userId: string }) {
  const { data } = await axiosInstance.post<CreateOrderResponse>(`/orders`);
  return { data: data.data };
}

export async function updateOrderStatus({
  orderId,
  status,
}: {
  orderId: string;
  status: string;
}) {
  const { data } = await axiosInstance.put<UpdateOrderStatusResponse>(
    `/orders/status/${orderId}`,
    {
      status,
    },
  );
  return { data: data.data };
}

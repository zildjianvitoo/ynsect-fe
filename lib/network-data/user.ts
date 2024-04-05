import { GetAllUsersResponse, GetUserByIdResponse } from "@/types/user";
import { axiosInstance } from "../axiosInstance";

export async function getAllUsers() {
  try {
    const { data } = await axiosInstance.get<GetAllUsersResponse>("/users");
    return { data: data.data };
  } catch (error) {
    return { error };
  }
}

export async function getUserById({ userId }: { userId: string }) {
  try {
    const { data } = await axiosInstance.get<GetUserByIdResponse>(
      `/users/${userId}`,
    );
    return { data: data.data };
  } catch (error) {
    return { error };
  }
}

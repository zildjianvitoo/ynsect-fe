import {
  GetAllUsersResponse,
  GetUserByIdResponse,
  RegisterProps,
} from "@/types/user";
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

export async function registerUser({ name, email, password }: RegisterProps) {
  const { data } = await axiosInstance.post("/user/register", {
    name,
    email,
    password,
  });
  return { data };
}

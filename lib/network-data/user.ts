import { GetAllUsersType } from "@/types/user";
import { axiosInstace } from "../axiosInstance";

export async function getAllUsers() {
  let isError;

  try {
    const { data } = await axiosInstace.get<GetAllUsersType>("/users");
    return { data };
  } catch (error) {
    isError = true;
    return { isError, error };
  }
}

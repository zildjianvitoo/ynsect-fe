import { GetAllUsersType } from "@/types/user";
import { axiosInstance } from "../axiosInstance";

export async function getAllUsers() {
  let isError;

  try {
    const { data } = await axiosInstance.get<GetAllUsersType>("/users");
    return { data };
  } catch (error) {
    isError = true;
    return { isError, error };
  }
}

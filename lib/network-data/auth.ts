import { axiosInstance } from "../axiosInstance";
import { RegisterProps } from "@/types/user";

export async function registerUser({ name, email, password }: RegisterProps) {
  let isError;

  try {
    const { data } = await axiosInstance.post("/users/register", {
      name,
      email,
      password,
    });
    return { data };
  } catch (error) {
    isError = true;
    return { isError, error };
  }
}

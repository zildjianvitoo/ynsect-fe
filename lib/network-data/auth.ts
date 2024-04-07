import { axiosInstance } from "../axiosInstance";
import { RegisterProps } from "@/types/user";

export async function registerUser({ name, email, password }: RegisterProps) {
  const { data } = await axiosInstance.post("/user/register", {
    name,
    email,
    password,
  });
  return { data };
}

import { axiosInstance } from "../axiosInstance";

export async function loginUser() {
  let isError;

  try {
    const { data } = await axiosInstance.post("/users/login");
    return { data };
  } catch (error) {
    isError = true;
    return { isError, error };
  }
}

export async function registerUser(values) {
  let isError;

  try {
    const { data } = await axiosInstance.post("/users/register", values);
    return { data };
  } catch (error) {
    isError = true;
    return { isError, error };
  }
}

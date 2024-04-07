import { GetAllForumsResponse, GetForumByIdResponse } from "@/types/forum";
import { axiosInstance } from "../axiosInstance";

export async function getAllForums() {
  try {
    const { data } = await axiosInstance.get<GetAllForumsResponse>("/forums");
    return { data: data.data };
  } catch (error) {
    return { error };
  }
}

export async function getForumById({ forumId }: { forumId: string }) {
  try {
    const { data } = await axiosInstance.get<GetForumByIdResponse>(
      `/forums/${forumId}`,
    );
    return { data: data.data };
  } catch (error) {
    return { error };
  }
}

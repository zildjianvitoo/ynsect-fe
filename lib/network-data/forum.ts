import {
  Forum,
  GetAllForumsResponse,
  GetForumByIdResponse,
} from "@/types/forum";
import { axiosInstance } from "../axiosInstance";

export async function getAllForums() {
  const { data } = await axiosInstance.get<GetAllForumsResponse>("/forums");
  return { data: data.data };
}

export async function getForumById({ forumId }: { forumId: string }) {
  const { data } = await axiosInstance.get<GetForumByIdResponse>(
    `/forums/${forumId}`,
  );
  return { data: data.data };
}

export async function postForum({ content, userId, token }: Forum) {
  const { data } = await axiosInstance.post(
    "/forums",
    {
      content,
      userId,
    },
    {
      headers: {
        authorization: token,
      },
    },
  );
  return { data };
}

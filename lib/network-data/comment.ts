import { Comment, GetAllCommentsResponse } from "@/types/comment";
import { axiosInstance } from "../axiosInstance";

export async function getAllComments() {
  const { data } = await axiosInstance.get<GetAllCommentsResponse>("/comments");
  return { data: data.data };
}

export async function getCommentByForumId({ forumId }: { forumId: string }) {
  const { data } = await axiosInstance.get<GetAllCommentsResponse>(
    "/comments/" + forumId,
  );
  return { data: data.data };
}

export async function postComment({
  userId,
  forumId,
  content,
  token,
}: Comment) {
  const { data } = await axiosInstance.post(
    "/comments/" + forumId,
    {
      userId,
      forumId: forumId,
      content,
    },
    {
      headers: {
        authorization: token,
      },
    },
  );
  return { data };
}

export async function updateComment({ id, content, token }: Comment) {
  const { data } = await axiosInstance.put(
    "/comments/" + id,
    {
      content,
    },
    {
      headers: {
        authorization: token,
      },
    },
  );
  return { data };
}

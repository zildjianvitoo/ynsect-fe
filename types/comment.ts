import { User } from "./user";

export interface Comment {
  id?: number;
  userId: number;
  user?: User;
  forumId: number;
  content: string;
  createdAt?: Date;
  updatedAt?: Date;
  token?: string;
}

export interface GetAllCommentsResponse {
  code: number;
  status: string;
  data: Comment[];
}

export interface GetCommentByIdResponse {
  code: number;
  status: string;
  data: Comment[];
}

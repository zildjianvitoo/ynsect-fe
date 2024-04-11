export interface Forum {
  id?: number;
  content: string;
  userId: number;
  createdAt?: Date;
  user?: { name: string };
  token?: string;
}

export interface GetAllForumsResponse {
  code: number;
  status: string;
  data: Forum[];
}

export interface GetForumByIdResponse {
  code: number;
  status: string;
  data: Forum;
}

export interface CeateSavedForumParams {
  id: number;
  userId: number;
  forumId: number;
  status: boolean;
}

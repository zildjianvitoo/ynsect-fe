export interface Forum {
  id: number;
  question: string;
  userId: number;
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

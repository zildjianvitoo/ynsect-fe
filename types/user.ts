export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetAllUsersResponse {
  code: number;
  status: string;
  data: User[];
}

export interface GetUserByIdResponse {
  code: number;
  status: string;
  data: User;
}

export interface RegisterProps {
  name: string;
  email: string;
  password: string;
}

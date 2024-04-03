export interface GetAllUsersType {
  id: number;
  name: string;
  email: string;
  no_telp: string;
  alamat: string;
}

export interface GetUserById {}

export interface RegisterProps {
  name: string;
  email: string;
  password: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  description: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetAllProductsResponse {
  code: number;
  status: string;
  data: Product[];
}

export interface GetProductByIdResponse {
  code: number;
  status: string;
  data: Product;
}

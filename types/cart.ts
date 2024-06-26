export interface ProductCart {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  quantity: number;
}

export interface GetCartByUserIdResponse {
  code: number;
  status: string;
  data: {
    userId: number;
    products: ProductCart[];
    total_items: number;
    total_price: number;
  };
}

export interface ProductToCartParams {
  userId: number;
  productId: number;
}

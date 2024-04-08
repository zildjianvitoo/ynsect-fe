export interface CreateOrderResponse {
  code: number;
  status: string;
  data: {
    token: string;
    redirect_url: string;
  };
}

export interface UpdateOrderStatusResponse {
  code: number;
  status: string;
  data: {
    id: number;
    userId: number;
    products: [
      {
        id: number;
        name: string;
        price: number;
        image: string;
        stock: number;
        description: string;
      },
    ];
    paymentLink: string;
    status: string;
  };
}

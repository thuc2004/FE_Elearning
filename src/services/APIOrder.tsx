import axiosInstance from "../api/axios";

export const APIOrder = {
  createOrder: async (body: object) => {
    const response = await axiosInstance.post(`/orders/create`, {
      ...body,
    });
    console.log(response);
    return response.data;
  },
  getOrderByUserId: async () => {
    const response = await axiosInstance.get(`/orders/get-order-not-paid`);
    console.log(response);
    return response.data;
  },
  getOrderById: async (orderId: string) => {
    const response = await axiosInstance.get(`/orders/get-by-id/${orderId}`);
    console.log(response);
    return response.data;
  },
  getQRcode: async (orderId: string)=>{
    const response = await axiosInstance.post(`/orders/qrcode/${orderId}`);
    console.log(response);
    return response.data;
  }
};

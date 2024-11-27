import axiosInstance from "../api/axios";

export const APIOrderItem = {
  updateOrderItem: async (id: string, body: object) => {
    console.log(id);

    const response = await axiosInstance.patch(`/order-items/update/${id}`, {
      ...body,
    });
    console.log(response);
    return response.data;
  },
  createOrderItem: async (body: object) => {
    const response = await axiosInstance.post(`/order-items/create`, {
      ...body,
    });
    console.log(response);
    return response;
  },
};

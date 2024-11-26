import axiosInstance from "../api/axios";

export const APICart = {
  getCartByUserId: async () => {
    const response = await axiosInstance.get("/cart/get-cart");
    console.log(response);
    return response.data;
  },
  updateCart: async (cartId: string) => {
    const response = await axiosInstance.patch(`/cart/update-cart/${cartId}`);
    return response.data;
  },
  increaseItemQuantity: async (cartId: string, body: object) => {
    const response = await axiosInstance.patch(
      `/cart/increase-quantity/${cartId}`,
      { ...body }
    );
    return response.data;
  },
  decreaseItemQuantity: async (cartId: string, body: object) => {
    const response = await axiosInstance.patch(
      `/cart/decrease-quantity/${cartId}`,
      { ...body }
    );
    return response.data;
  },
};

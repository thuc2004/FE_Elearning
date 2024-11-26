import axiosInstance from "../api/axios";

export const APICart = {
  addToCart: async (body: object) => {
    const response = await axiosInstance.post(`/cart/create/add-item`, {
      ...body,
    });
    return response.data;
  },
  getCartByUserId: async () => {
    try {
      const response = await axiosInstance.get("/cart/get-cart");
      console.log(response);
      return response.data;
    } catch (err: unknown) {
      return err.status;
    }
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

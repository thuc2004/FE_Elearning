import axiosInstance from "../api/axios";

export const APIProduct = {
  getAllProduct: async () => {
    const response = await axiosInstance.get("/product/GetAllProduct");
    console.log(response);
    return response;
  },
  getProductById: async (productId: string | undefined) => {
    const response = await axiosInstance.get(`/product/get/${productId}`);
    console.log(response);
    return response;
  },
};

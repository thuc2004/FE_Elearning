import axiosInstance from "../api/axios";

export const APIProductVariant = {
  getProductVariantById: async (id: unknown) => {
    const response = await axiosInstance.get(
      `/product-variants/get-by-id/${id}`
    );
    console.log(response);
    return response;
  },
};

import axiosInstance from "../api/axios";

export const APIOtp = {
  authenticateOTP: async (email: unknown, otp: unknown) => {
    const response = await axiosInstance.post(
      `/auth/authenticate-account?email=${email}`,
      {
        confirmationCode: otp,
      }
    );
    console.log(response);
    return response;
  },
};

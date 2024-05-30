import { toast } from "react-toastify";
import axiosInstance from "./axiosInstance";

const endPoint = "/product";

export const getProduct = async (productId) => {
  try {
    const response = await axiosInstance.get(endPoint, { productId });
    return response.data;
  } catch (error) {
    console.log('error at product fetching: ',error);
    toast.error(`🙅 ${error.message}`);
    return null;
  }
};

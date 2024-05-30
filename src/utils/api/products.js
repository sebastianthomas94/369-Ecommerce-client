import { toast } from "react-toastify";
import axiosInstance from "./axiosInstance";

const endPoint = "/products";

export const getProducts = async (options) => {
  try {
    const response = await axiosInstance.get(endPoint, { params: options });
    return response.data;
  } catch (error) {
    console.log("error occurred while fetching products, check internet");
    toast.error(`🙅 ${error.message}`);
    return null;
  }
};



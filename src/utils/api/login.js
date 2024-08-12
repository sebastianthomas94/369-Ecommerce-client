import axiosInstance from "./axiosInstance";
import { toast } from "react-toastify";

const endPoint = "/login";

export const postLogin = async (phone) => {
    try {
        const response = await axiosInstance.post(endPoint, { phone });
        return response.data;
    } catch (error) {
        console.log('error at product fetching: ',error);
        toast.error(`🙅 ${error.message}`);
        return null;
    }
};


export const getLogin = async (phone) => {
    try {
        const response = await axiosInstance.get(endPoint, { phone });
        return response.data;
    } catch (error) {
        console.log('error at product fetching: ',error);
        toast.error(`🙅 ${error.message}`);
        return null;
    }
};
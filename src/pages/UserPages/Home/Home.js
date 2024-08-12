import { getProducts } from "../../../utils/api/products";

export const getRecentProducts = () => {
  const options = {
    limit: "12",
    page_no: "1",
    sort: "latest",
  };
  return getProducts(options);
};

export const getMostRatedProducts = () => {
  const options = {
    limit: "12",
    page_no: "1",
    sort: "rating",
  };
  return getProducts(options);
};

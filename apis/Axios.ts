import axios from "axios";

export const getSellingItem = async (pageNumber = 1) => {
  console.log(pageNumber);
  const { data } = await axios.get(`http://localhost:4000/dummyData?_limit=12&_page=${pageNumber}`);
  return data;
};

export const getBasketItem = async ({ pageParam = 1 }) => {
  console.log(pageParam);
  const { data } = await axios.get(`http://localhost:4000/dummyData?_limit=6&_page=${pageParam}`);
  return data;
};

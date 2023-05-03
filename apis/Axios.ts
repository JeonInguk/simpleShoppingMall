import axios from "axios";

export const getSellingItem = async (pageNumber = 1) => {
  const { data } = await axios.get(`http://localhost:4000/dummyData?_limit=12&_page=${pageNumber}`);
  return data;
};

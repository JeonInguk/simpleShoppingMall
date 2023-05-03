import axios from "axios";

export const getSellingItem = async (pageNumber = 0) => {
  const { data } = await axios.get(`http://localhost:4000/dummyData?_limit=12&_page=${pageNumber}`);
  console.log("데이터요청");
  return data;
};

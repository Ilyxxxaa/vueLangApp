import { axiosInstance } from "./api";

export const getWordsRequest = async (group: number, page: number) => {
  return axiosInstance
    .get("/words", {
      params: {
        group,
        page,
      },
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
};

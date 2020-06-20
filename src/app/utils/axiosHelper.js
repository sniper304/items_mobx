import axios from "axios";

const baseUrl = "http://localhost:8080/api";

const getRequest = (url, data = {}, config = {}) => {
  return axios({
    ...config,
    url: `${baseUrl}/${url}`,
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    params: data,
  });
};

export { getRequest };

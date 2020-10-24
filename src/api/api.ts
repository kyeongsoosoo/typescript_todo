import axios from "axios";

const api = axios.create({
  baseURL:
    "https://restcountries.eu/rest/v2/all?fields=alpha2Code;capital;name;region;callingCodes",
});

export const listApi = {
  getList: () => api.get("/"),
};

listApi.getList();

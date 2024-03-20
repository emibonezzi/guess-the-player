import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://transfermarkt-db.p.rapidapi.com/v1",
  headers: {
    "x-rapidapi-host": "transfermarkt-db.p.rapidapi.com",
    "x-rapidapi-key": import.meta.env.VITE_API_KEY,
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance.get<T>(this.endpoint, config).then((res) => res.data);
  };
}

export default APIClient;

import axios, { AxiosRequestConfig } from "axios";
import { FetchResponseTeam } from "../entities/FetchResponseTeam";

const axiosInstance = axios.create({
  baseURL: "https://api-football-v1.p.rapidapi.com/v3",
  headers: {
    "x-rapidapi-host": "api-football-v1.p.rapidapi.com/v3",
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

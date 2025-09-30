import axios from "axios";
import { API_URL } from "@/lib/constants";
import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

const api = axios.create({
  baseURL: API_URL,
});

axios.interceptors.response.use((config) => {
  console.log('config -', config)
  return config;
});

export { queryClient, api };

import { useQuery, UseQueryResult } from "react-query";
import axios from "axios";
import { ApiResponse } from "@/types";

export const useUsers = (page: number): UseQueryResult<ApiResponse, Error> => {
  return useQuery<ApiResponse, Error>(["users", page], async () => {
    const { data } = await axios.get<ApiResponse>(`https://reqres.in/api/users?page=${page}`);
    return data;
  });
};


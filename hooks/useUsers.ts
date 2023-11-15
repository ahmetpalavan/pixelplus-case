import { useQuery, UseQueryResult } from "react-query";
import axios from "axios";

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface ApiResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
}

export const useUsers = (page: number): UseQueryResult<ApiResponse, Error> => {
  return useQuery<ApiResponse, Error>(["users", page], async () => {
    const { data } = await axios.get<ApiResponse>(`https://reqres.in/api/users?page=${page}`);
    return data;
  });
};

import { useMutation, UseMutationOptions, useQuery, useQueryClient, UseQueryResult } from "react-query";
import axios from "axios";
import { ApiResponse, IFormInput, IUserResponse, User } from "@/types";
import { toast } from "react-toastify";

//Kullanıcıları çekme
export const useUsers = (page: number): UseQueryResult<ApiResponse, Error> => {
  return useQuery<ApiResponse, Error>(["users", page], async () => {
    const { data } = await axios.get<ApiResponse>(`https://reqres.in/api/users?page=${page}`);
    return data;
  });
};

//Kullanıcı detaylarını çekme
const getUserDetails = async (id: number): Promise<User> => {
  const response = await axios.get(`https://reqres.in/api/users/${id}`);
  return response.data.data;
};

export const useUserDetail = (id: number): UseQueryResult<User, Error> => {
  return useQuery<User, Error>(["user", id], () => getUserDetails(id));
};

//Kullanıcı oluşturma
const createUser = async (userData: IFormInput): Promise<IUserResponse> => {
  const { data } = await axios.post<IUserResponse>("https://reqres.in/api/users", userData);
  return data;
};

export const useCreateUser = (options?: UseMutationOptions<IUserResponse, Error, IFormInput>) => {
  const queryClient = useQueryClient();

  return useMutation(createUser, {
    onSuccess: (data) => {
      console.log(data, "data");
      toast.success(`User Created! Name: ${data.name} Job: ${data.job}  ID: ${data.id} Created At: ${data.createdAt}`);
      queryClient.invalidateQueries("users");
    },
    onError: (error) => {
      toast.error(`Error creating user: ${error.message}`);
    },
    ...options,
  });
};

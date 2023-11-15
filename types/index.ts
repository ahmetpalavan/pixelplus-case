export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface ApiResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
}

export interface IFormInput {
  name: string;
  job: string;
}

export interface IUserResponse {
  id: string;
  name: string;
  job: string;
  createdAt: string;
}

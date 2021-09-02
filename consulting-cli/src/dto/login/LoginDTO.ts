export interface LoginOutput {
  id: number;
  name: string;
  email: string;
  token: string;
  userCategory: string;
}

export interface LoginInput {
  email: string;
  password: string;
}
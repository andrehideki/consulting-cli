export interface LoginOutput {
  email: string;
  token: string;
  userCategory: string;
}

export interface LoginInput {
  email: string;
  password: string;
}
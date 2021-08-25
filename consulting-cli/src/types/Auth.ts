import { LoginInput } from "../dto/login/LoginDTO";

export type AuthType = {
  email: string;
  userCategory: string;
  token: string;
};

export type AuthContextType = {
  auth: AuthType;
  setAuth: (AuthType: AuthType) => void;
  logout: () => void;
  login: (input: LoginInput) => void;
};
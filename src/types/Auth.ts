import { LoginInput } from "../dto/login/LoginDTO";

export type AuthType = {
  id: number;
  name: string;
  email: string;
  token: string;
  userCategory: string;
};

export type AuthContextType = {
  auth: AuthType;
  setAuth: (AuthType: AuthType) => void;
  logout: () => void;
  login: (input: LoginInput) => void;
};
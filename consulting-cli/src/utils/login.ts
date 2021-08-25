import { getCookie, removeCookie } from "./cookie";

const COOKIE_TOKEN = 'auth';

const isLogged = () => !!getCookie(COOKIE_TOKEN);
const logout = () => removeCookie(COOKIE_TOKEN);

export { isLogged, logout };
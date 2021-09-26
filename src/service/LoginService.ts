import { CONSULTING_API_URL } from '../utils/constants';
import { LoginInput, LoginOutput } from '../dto/login/LoginDTO';
import { removeCookie, setCookie } from '../utils/cookie';
import axios from 'axios';


export class LoginService {

  private url = `${CONSULTING_API_URL}`;
  private COOKIE_TOKEN = 'auth';

  async login(input: LoginInput): Promise<any> {
    try {
      let response =  await axios.post<LoginOutput>(`${this.url}/login`, input);
      let nowPlusOneHour = new Date();
      nowPlusOneHour.setHours(new Date().getHours() + 1);
      const loginOutput = response.data;
      setCookie(this.COOKIE_TOKEN, response.data.token, nowPlusOneHour);
      return loginOutput;
    } catch (error: any) {
      console.log(error, error.message)
    }
  }

  logout() {
    localStorage.removeItem(this.COOKIE_TOKEN);
    removeCookie(this.COOKIE_TOKEN);
  }

  async isTokenValid(token: string) {
    try {
      const isValid = await axios.post<LoginOutput>(`${this.url}/token`, {token});
      return isValid;
    } catch (error) {
      return false;
    }
  }
}
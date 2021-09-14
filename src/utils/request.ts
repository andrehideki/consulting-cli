import axios from "axios";
import { CONSULTING_API_URL } from "./constants";

const client = axios.create({ baseURL: CONSULTING_API_URL });

async function get<T>(resource: string): Promise<T> {
  try {
    const response = await client.get<T>(resource, { withCredentials: true});
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

async function post<T>(resource: string, data: T): Promise<T> {
  try {
    const response = await client.post<any>(resource, data, { withCredentials: true});
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export { get, post };
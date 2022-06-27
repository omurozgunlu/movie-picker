import axios, { AxiosResponse } from "axios";
class HttpClient {
  async post(path: string, data: object) {
    try {
      const response: AxiosResponse = await axios.post(path, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
export default new HttpClient();

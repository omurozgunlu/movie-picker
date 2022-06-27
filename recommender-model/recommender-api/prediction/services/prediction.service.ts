import HttpClient from "../../common/httpClient/common.httpClient";

class PredictionService {
  httpClient: typeof HttpClient;
  url: string;
  constructor() {
    this.httpClient = HttpClient;
    this.url = "http://localhost:8050/kmeans";
  }
  async getClusterId(weights: Array<number>) {
    const data = await this.httpClient.post(this.url, { weights });
    const clusterId: number = data.clusterId;
    return clusterId;
  }
}
export default new PredictionService();

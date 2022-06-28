import HttpClient from "../../common/httpClient/common.httpClient";
import debug from "debug";
const log: debug.IDebugger = debug("app:prediction-service");
class PredictionService {
  httpClient: typeof HttpClient;
  url: string;
  constructor() {
    this.httpClient = HttpClient;
    this.url = "http://localhost:8051/prediction";
  }
  async getPredictions(weights: Array<number>) {
    const data = await this.httpClient.post(this.url, { weights });
    log(`data ${data}`); //merge tmdb & local info
    const movieIds: Array<string> = [];
    for (const filmInfo of data) {
      movieIds.push(filmInfo[0]);
    }
    return movieIds;
  }
}
export default new PredictionService();

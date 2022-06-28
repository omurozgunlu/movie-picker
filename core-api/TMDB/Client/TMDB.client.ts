import HttpClient from "../../common/httpClient/common.httpClient";
import "dotenv/config";
import debug from "debug";
const log: debug.IDebugger = debug("app:TMDB-client");
class TMDBClient {
  httpClient: typeof HttpClient;
  baseURL: string;
  TMDBApiKey: string;
  constructor() {
    this.httpClient = HttpClient;
    this.baseURL = "https://api.themoviedb.org/3/";
    this.TMDBApiKey = process.env.TMDB_API_KEY || "";
  }
  async getMovieInfos(movieIds: Array<string>) {
    log(`movieIds ${movieIds}`);
    const data = [];
    for await (const movieId of movieIds) {
      log(`getting movie info for ${movieId}`);
      const url = this._getIMDBURL(movieId);
      const movieData = await this.httpClient.get(url, {});
      data.push(movieData);
    }
    return data;
  }
  _getIMDBURL(movieID: string) {
    return (
      this.baseURL +
      "/find/tt" +
      movieID +
      "?api_key=" +
      this.TMDBApiKey +
      "&external_source=imdb_id"
    );
  }
}
export default new TMDBClient();
// https://api.themoviedb.org/3/find/tt0816692?api_key=xxx&external_source=imdb_id

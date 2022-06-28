import TMDBClient from "../Client/TMDB.client";

class PredictionService {
  tmdbClient: typeof TMDBClient;
  constructor() {
    this.tmdbClient = TMDBClient || null;
  }
  async getMovieInfos(movieIds: Array<string>) {
    const movieInfos = await this.tmdbClient.getMovieInfos(movieIds);
    return movieInfos;
  }
}
export default new PredictionService();

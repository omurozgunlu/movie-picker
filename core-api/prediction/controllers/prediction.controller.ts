import express from "express";

import predictionService from "../services/prediction.service";
import predictionUtils from "../utils/prediction.utils";
import TMDBService from "../../TMDB/Service/TMDB.service";
import debug from "debug";
const log: debug.IDebugger = debug("app:prediction-controller");
class PredictionController {
  async getPredictions(req: express.Request, res: express.Response) {
    const weights: Array<number> = req.body.weights; // array of length 8
    const convertedWeights: Array<number> =
      predictionUtils.convertToFullWeights(weights);

    const movieIds: Array<string> = await predictionService.getPredictions(
      convertedWeights
    );
    log(`movieIds ${movieIds}`);
    const movieInfos: Array<Object> = await TMDBService.getMovieInfos(movieIds);

    res.status(200).send(movieInfos);
  }
}
export default new PredictionController();

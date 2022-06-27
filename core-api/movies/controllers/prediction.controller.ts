import express from "express";
import fileService from "../../file/service/file.service";
import debug from "debug";
import predictionService from "../services/prediction.service";
const log: debug.IDebugger = debug("app:prediction-controller");
class PredictionController {
  async getClusterId(req: express.Request, res: express.Response) {
    const weights: Array<number> = req.body.weights;

    const clusterId: number = await predictionService.getClusterId(weights);
    log(`clusterId: ${clusterId}`);
    const movies: Array<Object> = await fileService.getMovies(
      clusterId.toString()
    );
    res.status(200).send(movies);
  }
}
export default new PredictionController();

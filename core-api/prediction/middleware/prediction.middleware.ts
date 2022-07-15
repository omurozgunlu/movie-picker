import express from "express";
import stocksService from "../services/prediction.service";
import { validateRequestBody } from "../schemaValidator/prediction.schemaValidator";
import debug from "debug";

const log: debug.IDebugger = debug("app:stocks-controller");

class PredictionMiddleware {
  async validateRequest(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    if (req.body) {
      next();
    } else {
      res.status(400).send({
        error: "Wrong Request Schema.",
      });
    }
  }
}
// && validateRequestBody(req.body)
export default new PredictionMiddleware();

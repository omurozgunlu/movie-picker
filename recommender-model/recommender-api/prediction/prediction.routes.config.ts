import { CommonRoutesConfig } from "../common/common.routes.config";
import predictionController from "./controllers/prediction.controller";
import predictionMiddleware from "./middleware/prediction.middleware";
import express from "express";

export class PredictionRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "PredictionRoutes");
  }
  configureRoutes() {
    this.app
      .route(`/prediction`)
      .post(
        predictionMiddleware.validateRequest,
        predictionController.getClusterId
      );
    return this.app;
  }
}

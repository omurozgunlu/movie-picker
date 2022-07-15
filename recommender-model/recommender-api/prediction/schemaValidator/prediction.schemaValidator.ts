import express from "express";
import { predictionRequest } from "../schemas/prediction.schemas";
import debug from "debug";

const log: debug.IDebugger = debug("app:stocks-controller");
export const validateRequestBody = (data: express.Request) => {
  const { error, value } = predictionRequest.validate(data);
  if (error === null) {
    //valid
    return true;
  } else {
    debug(JSON.stringify(error));
    return false;
  }
};

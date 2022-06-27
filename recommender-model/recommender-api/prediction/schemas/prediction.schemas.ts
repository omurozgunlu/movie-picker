import Joi from "joi";

export const predictionRequest = Joi.object({
  weights: Joi.array().length(28),
});

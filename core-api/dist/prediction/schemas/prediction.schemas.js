"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.predictionRequest = void 0;
const joi_1 = __importDefault(require("joi"));
exports.predictionRequest = joi_1.default.object({
    weights: joi_1.default.array().length(28),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZGljdGlvbi5zY2hlbWFzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcHJlZGljdGlvbi9zY2hlbWFzL3ByZWRpY3Rpb24uc2NoZW1hcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSw4Q0FBc0I7QUFFVCxRQUFBLGlCQUFpQixHQUFHLGFBQUcsQ0FBQyxNQUFNLENBQUM7SUFDMUMsT0FBTyxFQUFFLGFBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO0NBQ2hDLENBQUMsQ0FBQyJ9
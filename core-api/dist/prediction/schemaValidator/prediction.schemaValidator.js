"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequestBody = void 0;
const prediction_schemas_1 = require("../schemas/prediction.schemas");
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)("app:stocks-controller");
const validateRequestBody = (data) => {
    const { error, value } = prediction_schemas_1.predictionRequest.validate(data);
    if (error === null) {
        //valid
        return true;
    }
    else {
        (0, debug_1.default)(JSON.stringify(error));
        return false;
    }
};
exports.validateRequestBody = validateRequestBody;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZGljdGlvbi5zY2hlbWFWYWxpZGF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9wcmVkaWN0aW9uL3NjaGVtYVZhbGlkYXRvci9wcmVkaWN0aW9uLnNjaGVtYVZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxzRUFBa0U7QUFDbEUsa0RBQTBCO0FBRTFCLE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQyx1QkFBdUIsQ0FBQyxDQUFDO0FBQ3JELE1BQU0sbUJBQW1CLEdBQUcsQ0FBQyxJQUFxQixFQUFFLEVBQUU7SUFDM0QsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxzQ0FBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUQsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1FBQ2xCLE9BQU87UUFDUCxPQUFPLElBQUksQ0FBQztLQUNiO1NBQU07UUFDTCxJQUFBLGVBQUssRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDN0IsT0FBTyxLQUFLLENBQUM7S0FDZDtBQUNILENBQUMsQ0FBQztBQVRXLFFBQUEsbUJBQW1CLHVCQVM5QiJ9
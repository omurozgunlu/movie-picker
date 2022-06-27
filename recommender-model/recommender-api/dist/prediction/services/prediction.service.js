"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_httpClient_1 = __importDefault(require("../../common/httpClient/common.httpClient"));
class PredictionService {
    constructor() {
        this.httpClient = common_httpClient_1.default;
        this.url = "http://localhost:8050/kmeans";
    }
    getClusterId(weights) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.httpClient.post(this.url, { weights });
            const clusterId = data.clusterId;
            return clusterId;
        });
    }
}
exports.default = new PredictionService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZGljdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcHJlZGljdGlvbi9zZXJ2aWNlcy9wcmVkaWN0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrR0FBbUU7QUFFbkUsTUFBTSxpQkFBaUI7SUFHckI7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLDJCQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLEdBQUcsR0FBRyw4QkFBOEIsQ0FBQztJQUM1QyxDQUFDO0lBQ0ssWUFBWSxDQUFDLE9BQXNCOztZQUN2QyxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBQy9ELE1BQU0sU0FBUyxHQUFXLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDekMsT0FBTyxTQUFTLENBQUM7UUFDbkIsQ0FBQztLQUFBO0NBQ0Y7QUFDRCxrQkFBZSxJQUFJLGlCQUFpQixFQUFFLENBQUMifQ==
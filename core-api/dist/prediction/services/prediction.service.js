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
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)("app:prediction-service");
class PredictionService {
    constructor() {
        this.httpClient = common_httpClient_1.default;
        this.url = "http://localhost:8051/prediction";
    }
    getPredictions(weights) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.httpClient.post(this.url, { weights });
            log(`data ${data}`); //merge tmdb & local info
            const movieIds = [];
            for (const filmInfo of data) {
                movieIds.push(filmInfo[0]);
            }
            return movieIds;
        });
    }
}
exports.default = new PredictionService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZGljdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcHJlZGljdGlvbi9zZXJ2aWNlcy9wcmVkaWN0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrR0FBbUU7QUFDbkUsa0RBQTBCO0FBQzFCLE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBQzdELE1BQU0saUJBQWlCO0lBR3JCO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRywyQkFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxHQUFHLEdBQUcsa0NBQWtDLENBQUM7SUFDaEQsQ0FBQztJQUNLLGNBQWMsQ0FBQyxPQUFzQjs7WUFDekMsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUMvRCxHQUFHLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMseUJBQXlCO1lBQzlDLE1BQU0sUUFBUSxHQUFrQixFQUFFLENBQUM7WUFDbkMsS0FBSyxNQUFNLFFBQVEsSUFBSSxJQUFJLEVBQUU7Z0JBQzNCLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDNUI7WUFDRCxPQUFPLFFBQVEsQ0FBQztRQUNsQixDQUFDO0tBQUE7Q0FDRjtBQUNELGtCQUFlLElBQUksaUJBQWlCLEVBQUUsQ0FBQyJ9
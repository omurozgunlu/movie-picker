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
const prediction_service_1 = __importDefault(require("../services/prediction.service"));
const prediction_utils_1 = __importDefault(require("../utils/prediction.utils"));
const TMDB_service_1 = __importDefault(require("../../TMDB/Service/TMDB.service"));
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)("app:prediction-controller");
class PredictionController {
    getPredictions(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const weights = req.body.weights; // array of length 8
            const convertedWeights = prediction_utils_1.default.convertToFullWeights(weights);
            const movieIds = yield prediction_service_1.default.getPredictions(convertedWeights);
            log(`movieIds ${movieIds}`);
            const movieInfos = yield TMDB_service_1.default.getMovieInfos(movieIds);
            res.status(200).send(movieInfos);
        });
    }
}
exports.default = new PredictionController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZGljdGlvbi5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcHJlZGljdGlvbi9jb250cm9sbGVycy9wcmVkaWN0aW9uLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFQSx3RkFBK0Q7QUFDL0QsaUZBQXdEO0FBQ3hELG1GQUEwRDtBQUMxRCxrREFBMEI7QUFDMUIsTUFBTSxHQUFHLEdBQW9CLElBQUEsZUFBSyxFQUFDLDJCQUEyQixDQUFDLENBQUM7QUFDaEUsTUFBTSxvQkFBb0I7SUFDbEIsY0FBYyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQzlELE1BQU0sT0FBTyxHQUFrQixHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLG9CQUFvQjtZQUNyRSxNQUFNLGdCQUFnQixHQUNwQiwwQkFBZSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRWhELE1BQU0sUUFBUSxHQUFrQixNQUFNLDRCQUFpQixDQUFDLGNBQWMsQ0FDcEUsZ0JBQWdCLENBQ2pCLENBQUM7WUFDRixHQUFHLENBQUMsWUFBWSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQzVCLE1BQU0sVUFBVSxHQUFrQixNQUFNLHNCQUFXLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRTVFLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ25DLENBQUM7S0FBQTtDQUNGO0FBQ0Qsa0JBQWUsSUFBSSxvQkFBb0IsRUFBRSxDQUFDIn0=
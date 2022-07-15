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
const file_service_1 = __importDefault(require("../../file/service/file.service"));
const debug_1 = __importDefault(require("debug"));
const prediction_service_1 = __importDefault(require("../services/prediction.service"));
const log = (0, debug_1.default)("app:prediction-controller");
class PredictionController {
    getClusterId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const weights = req.body.weights;
            const clusterId = yield prediction_service_1.default.getClusterId(weights);
            log(`clusterId: ${clusterId}`);
            const movies = yield file_service_1.default.getMovies(clusterId.toString());
            res.status(200).send(movies);
        });
    }
}
exports.default = new PredictionController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZGljdGlvbi5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcHJlZGljdGlvbi9jb250cm9sbGVycy9wcmVkaWN0aW9uLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSxtRkFBMEQ7QUFDMUQsa0RBQTBCO0FBQzFCLHdGQUErRDtBQUMvRCxNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsMkJBQTJCLENBQUMsQ0FBQztBQUNoRSxNQUFNLG9CQUFvQjtJQUNsQixZQUFZLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDNUQsTUFBTSxPQUFPLEdBQWtCLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBRWhELE1BQU0sU0FBUyxHQUFXLE1BQU0sNEJBQWlCLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3hFLEdBQUcsQ0FBQyxjQUFjLFNBQVMsRUFBRSxDQUFDLENBQUM7WUFDL0IsTUFBTSxNQUFNLEdBQWtCLE1BQU0sc0JBQVcsQ0FBQyxTQUFTLENBQ3ZELFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FDckIsQ0FBQztZQUNGLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9CLENBQUM7S0FBQTtDQUNGO0FBQ0Qsa0JBQWUsSUFBSSxvQkFBb0IsRUFBRSxDQUFDIn0=
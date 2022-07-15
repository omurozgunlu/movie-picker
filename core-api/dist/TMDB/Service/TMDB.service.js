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
const TMDB_client_1 = __importDefault(require("../Client/TMDB.client"));
class PredictionService {
    constructor() {
        this.tmdbClient = TMDB_client_1.default || null;
    }
    getMovieInfos(movieIds) {
        return __awaiter(this, void 0, void 0, function* () {
            const movieInfos = yield this.tmdbClient.getMovieInfos(movieIds);
            return movieInfos;
        });
    }
}
exports.default = new PredictionService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVE1EQi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vVE1EQi9TZXJ2aWNlL1RNREIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHdFQUErQztBQUUvQyxNQUFNLGlCQUFpQjtJQUVyQjtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcscUJBQVUsSUFBSSxJQUFJLENBQUM7SUFDdkMsQ0FBQztJQUNLLGFBQWEsQ0FBQyxRQUF1Qjs7WUFDekMsTUFBTSxVQUFVLEdBQUcsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNqRSxPQUFPLFVBQVUsQ0FBQztRQUNwQixDQUFDO0tBQUE7Q0FDRjtBQUNELGtCQUFlLElBQUksaUJBQWlCLEVBQUUsQ0FBQyJ9
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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_httpClient_1 = __importDefault(require("../../common/httpClient/common.httpClient"));
require("dotenv/config");
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)("app:TMDB-client");
class TMDBClient {
    constructor() {
        this.httpClient = common_httpClient_1.default;
        this.baseURL = "https://api.themoviedb.org/3/";
        this.TMDBApiKey = process.env.TMDB_API_KEY || "";
    }
    getMovieInfos(movieIds) {
        var movieIds_1, movieIds_1_1;
        var e_1, _a;
        return __awaiter(this, void 0, void 0, function* () {
            log(`movieIds ${movieIds}`);
            const data = [];
            try {
                for (movieIds_1 = __asyncValues(movieIds); movieIds_1_1 = yield movieIds_1.next(), !movieIds_1_1.done;) {
                    const movieId = movieIds_1_1.value;
                    log(`getting movie info for ${movieId}`);
                    const url = this._getIMDBURL(movieId);
                    const movieData = yield this.httpClient.get(url, {});
                    data.push(movieData);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (movieIds_1_1 && !movieIds_1_1.done && (_a = movieIds_1.return)) yield _a.call(movieIds_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return data;
        });
    }
    _getIMDBURL(movieID) {
        return (this.baseURL +
            "/find/tt" +
            movieID +
            "?api_key=" +
            this.TMDBApiKey +
            "&external_source=imdb_id");
    }
}
exports.default = new TMDBClient();
// https://api.themoviedb.org/3/find/tt0816692?api_key=xxx&external_source=imdb_id
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVE1EQi5jbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9UTURCL0NsaWVudC9UTURCLmNsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrR0FBbUU7QUFDbkUseUJBQXVCO0FBQ3ZCLGtEQUEwQjtBQUMxQixNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUN0RCxNQUFNLFVBQVU7SUFJZDtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsMkJBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLCtCQUErQixDQUFDO1FBQy9DLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDO0lBQ25ELENBQUM7SUFDSyxhQUFhLENBQUMsUUFBdUI7Ozs7WUFDekMsR0FBRyxDQUFDLFlBQVksUUFBUSxFQUFFLENBQUMsQ0FBQztZQUM1QixNQUFNLElBQUksR0FBRyxFQUFFLENBQUM7O2dCQUNoQixLQUE0QixhQUFBLGNBQUEsUUFBUSxDQUFBO29CQUF6QixNQUFNLE9BQU8scUJBQUEsQ0FBQTtvQkFDdEIsR0FBRyxDQUFDLDBCQUEwQixPQUFPLEVBQUUsQ0FBQyxDQUFDO29CQUN6QyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUN0QyxNQUFNLFNBQVMsR0FBRyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztvQkFDckQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztpQkFDdEI7Ozs7Ozs7OztZQUNELE9BQU8sSUFBSSxDQUFDOztLQUNiO0lBQ0QsV0FBVyxDQUFDLE9BQWU7UUFDekIsT0FBTyxDQUNMLElBQUksQ0FBQyxPQUFPO1lBQ1osVUFBVTtZQUNWLE9BQU87WUFDUCxXQUFXO1lBQ1gsSUFBSSxDQUFDLFVBQVU7WUFDZiwwQkFBMEIsQ0FDM0IsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQUNELGtCQUFlLElBQUksVUFBVSxFQUFFLENBQUM7QUFDaEMsa0ZBQWtGIn0=
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
        return __awaiter(this, void 0, void 0, function* () {
            // log(`movieIds ${movieIds}`);
            // const data = [];
            // for await (const movieId of movieIds) {
            //   log(`getting movie info for ${movieId}`);
            //   const url = this._getIMDBURL(movieId);
            //   const movieData = await this.httpClient.get(url, {});
            //   data.push(movieData);
            // }
            // return data;
            const result = yield Promise.all(movieIds.map((id) => this.httpClient.get(this._getIMDBURL(id), {})));
            // const data = result.map((el) => el[0]);
            return result;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVE1EQi5jbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9UTURCL0NsaWVudC9UTURCLmNsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGtHQUFtRTtBQUNuRSx5QkFBdUI7QUFDdkIsa0RBQTBCO0FBRTFCLE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3RELE1BQU0sVUFBVTtJQUlkO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRywyQkFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsK0JBQStCLENBQUM7UUFDL0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksSUFBSSxFQUFFLENBQUM7SUFDbkQsQ0FBQztJQUNLLGFBQWEsQ0FBQyxRQUF1Qjs7WUFDekMsK0JBQStCO1lBQy9CLG1CQUFtQjtZQUNuQiwwQ0FBMEM7WUFDMUMsOENBQThDO1lBQzlDLDJDQUEyQztZQUMzQywwREFBMEQ7WUFDMUQsMEJBQTBCO1lBQzFCLElBQUk7WUFDSixlQUFlO1lBQ2YsTUFBTSxNQUFNLEdBQUcsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUM5QixRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQ3BFLENBQUM7WUFDRiwwQ0FBMEM7WUFDMUMsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQztLQUFBO0lBQ0QsV0FBVyxDQUFDLE9BQWU7UUFDekIsT0FBTyxDQUNMLElBQUksQ0FBQyxPQUFPO1lBQ1osVUFBVTtZQUNWLE9BQU87WUFDUCxXQUFXO1lBQ1gsSUFBSSxDQUFDLFVBQVU7WUFDZiwwQkFBMEIsQ0FDM0IsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQUNELGtCQUFlLElBQUksVUFBVSxFQUFFLENBQUM7QUFDaEMsa0ZBQWtGIn0=
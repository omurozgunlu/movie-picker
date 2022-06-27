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
const axios_1 = __importDefault(require("axios"));
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)("app:in-memory");
class StocksDao {
    constructor() {
        log("Created new instance of StocksDao");
        this.url = "https://jsonmock.hackerrank.com/api/stocks";
    }
    getStockByDate(date) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._getFromUrl(date);
            const data = result.data && result.data.length > 0 ? result.data[0] : null;
            if (data)
                delete data.date;
            if (!result || !data)
                return null;
            else {
                return data;
            }
        });
    }
    _getFromUrl(date) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield (0, axios_1.default)(this.url + "?date=" + date);
            return yield data.data;
        });
    }
}
exports.default = new StocksDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZGljdGlvbi5kYW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9wcmVkaWN0aW9uL2Rhby9wcmVkaWN0aW9uLmRhby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLGtEQUEwQjtBQUMxQixrREFBMEI7QUFFMUIsTUFBTSxHQUFHLEdBQW9CLElBQUEsZUFBSyxFQUFDLGVBQWUsQ0FBQyxDQUFDO0FBRXBELE1BQU0sU0FBUztJQUViO1FBQ0UsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLEdBQUcsR0FBRyw0Q0FBNEMsQ0FBQztJQUMxRCxDQUFDO0lBQ0ssY0FBYyxDQUFDLElBQVk7O1lBQy9CLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QyxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzNFLElBQUksSUFBSTtnQkFBRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDM0IsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUk7Z0JBQUUsT0FBTyxJQUFJLENBQUM7aUJBQzdCO2dCQUNILE9BQU8sSUFBSSxDQUFDO2FBQ2I7UUFDSCxDQUFDO0tBQUE7SUFDSyxXQUFXLENBQUMsSUFBWTs7WUFDNUIsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFBLGVBQUssRUFBQyxJQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQztZQUNyRCxPQUFPLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQztRQUN6QixDQUFDO0tBQUE7Q0FDRjtBQUNELGtCQUFlLElBQUksU0FBUyxFQUFFLENBQUMifQ==
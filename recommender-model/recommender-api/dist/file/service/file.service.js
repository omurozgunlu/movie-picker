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
const fs = require("fs").promises;
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)("app:file-service");
class FileService {
    constructor() {
        this.clusters = null;
    }
    readFile() {
        return __awaiter(this, void 0, void 0, function* () {
            const buffer = yield fs.readFile(__dirname + "/cluster-info.json", "utf-8");
            const data = JSON.parse(buffer);
            return data;
        });
    }
    _filterTopMovies(movies, stopCondition) {
        const sortedMovies = Object.entries(movies).sort((a, b) => b[1].popularityIndex - a[1].popularityIndex);
        return sortedMovies.slice(0, stopCondition);
    }
    getMovies(clusterId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.clusters === null) {
                this.clusters = yield this.readFile();
            }
            const clusterInfo = this.clusters[clusterId];
            const movies = clusterInfo.films;
            const filteredMovies = this._filterTopMovies(movies, 10); //return top 10 movies
            return filteredMovies;
        });
    }
}
exports.default = new FileService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vZmlsZS9zZXJ2aWNlL2ZpbGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUM7QUFDbEMsa0RBQTBCO0FBQzFCLE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ3ZELE1BQU0sV0FBVztJQUVmO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDdkIsQ0FBQztJQUNLLFFBQVE7O1lBQ1osTUFBTSxNQUFNLEdBQUcsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxvQkFBb0IsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUM1RSxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2hDLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztLQUFBO0lBQ0QsZ0JBQWdCLENBQUMsTUFBYyxFQUFFLGFBQXFCO1FBQ3BELE1BQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUM5QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FDdEQsQ0FBQztRQUNGLE9BQU8sWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVLLFNBQVMsQ0FBQyxTQUFpQjs7WUFDL0IsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRTtnQkFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUN2QztZQUNELE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDN0MsTUFBTSxNQUFNLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUNqQyxNQUFNLGNBQWMsR0FBa0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLHNCQUFzQjtZQUMvRixPQUFPLGNBQWMsQ0FBQztRQUN4QixDQUFDO0tBQUE7Q0FDRjtBQUNELGtCQUFlLElBQUksV0FBVyxFQUFFLENBQUMifQ==
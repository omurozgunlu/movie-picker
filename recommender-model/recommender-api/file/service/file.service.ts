const fs = require("fs").promises;
import debug from "debug";
const log: debug.IDebugger = debug("app:file-service");
class FileService {
  clusters: any;
  constructor() {
    this.clusters = null;
  }
  async readFile() {
    const buffer = await fs.readFile(__dirname + "/cluster-info.json", "utf-8");
    const data = JSON.parse(buffer);
    return data;
  }
  _filterTopMovies(movies: Object, stopCondition: number) {
    const sortedMovies = Object.entries(movies).sort(
      (a, b) => b[1].popularityIndex - a[1].popularityIndex
    );
    return sortedMovies.slice(0, stopCondition);
  }

  async getMovies(clusterId: string) {
    if (this.clusters === null) {
      this.clusters = await this.readFile();
    }
    const clusterInfo = this.clusters[clusterId];
    const movies = clusterInfo.films;
    const filteredMovies: Array<Object> = this._filterTopMovies(movies, 30); //return top 30 movies
    return filteredMovies;
  }
}
export default new FileService();

import { StockDTO } from "../dto/prediction.dto";
import axios from "axios";
import debug from "debug";

const log: debug.IDebugger = debug("app:in-memory");

class StocksDao {
  url: string;
  constructor() {
    log("Created new instance of StocksDao");
    this.url = "https://jsonmock.hackerrank.com/api/stocks";
  }
  async getStockByDate(date: string) {
    const result = await this._getFromUrl(date);
    const data = result.data && result.data.length > 0 ? result.data[0] : null;
    if (data) delete data.date;
    if (!result || !data) return null;
    else {
      return data;
    }
  }
  async _getFromUrl(date: string) {
    const data = await axios(this.url + "?date=" + date);
    return await data.data;
  }
}
export default new StocksDao();

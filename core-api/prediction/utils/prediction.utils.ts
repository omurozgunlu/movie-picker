import { GENRES, GENRE_SHORT_LIST } from "../constants/prediction.constants";
class PredictionUtils {
  convertToFullWeights(weights: Array<number>) {
    const shortList = GENRE_SHORT_LIST;
    const newWeights: Array<number> = this._placeToNewIndex(weights);
    return newWeights;
  }
  _placeToNewIndex(weights: Array<number>) {
    const newWeights = new Array(28).fill(0);
    weights.forEach((weight, index) => {
      newWeights[GENRE_SHORT_LIST[index]] = weight;
    });
    return newWeights;
  }
}
export default new PredictionUtils();

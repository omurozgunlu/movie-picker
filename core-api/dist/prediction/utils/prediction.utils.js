"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prediction_constants_1 = require("../constants/prediction.constants");
class PredictionUtils {
    convertToFullWeights(weights) {
        const shortList = prediction_constants_1.GENRE_SHORT_LIST;
        const newWeights = this._placeToNewIndex(weights);
        return newWeights;
    }
    _placeToNewIndex(weights) {
        const newWeights = new Array(28).fill(0);
        weights.forEach((weight, index) => {
            newWeights[prediction_constants_1.GENRE_SHORT_LIST[index]] = weight;
        });
        return newWeights;
    }
}
exports.default = new PredictionUtils();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZGljdGlvbi51dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3ByZWRpY3Rpb24vdXRpbHMvcHJlZGljdGlvbi51dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDRFQUE2RTtBQUM3RSxNQUFNLGVBQWU7SUFDbkIsb0JBQW9CLENBQUMsT0FBc0I7UUFDekMsTUFBTSxTQUFTLEdBQUcsdUNBQWdCLENBQUM7UUFDbkMsTUFBTSxVQUFVLEdBQWtCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqRSxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBQ0QsZ0JBQWdCLENBQUMsT0FBc0I7UUFDckMsTUFBTSxVQUFVLEdBQUcsSUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDaEMsVUFBVSxDQUFDLHVDQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDO1FBQy9DLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQztDQUNGO0FBQ0Qsa0JBQWUsSUFBSSxlQUFlLEVBQUUsQ0FBQyJ9
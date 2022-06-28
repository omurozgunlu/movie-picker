"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PredictionRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const prediction_controller_1 = __importDefault(require("./controllers/prediction.controller"));
const prediction_middleware_1 = __importDefault(require("./middleware/prediction.middleware"));
class PredictionRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, "PredictionRoutes");
    }
    configureRoutes() {
        this.app
            .route(`/prediction`)
            .post(prediction_middleware_1.default.validateRequest, prediction_controller_1.default.getPredictions);
        return this.app;
    }
}
exports.PredictionRoutes = PredictionRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZGljdGlvbi5yb3V0ZXMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcHJlZGljdGlvbi9wcmVkaWN0aW9uLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEseUVBQW9FO0FBQ3BFLGdHQUF1RTtBQUN2RSwrRkFBc0U7QUFHdEUsTUFBYSxnQkFBaUIsU0FBUSx5Q0FBa0I7SUFDdEQsWUFBWSxHQUF3QjtRQUNsQyxLQUFLLENBQUMsR0FBRyxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDakMsQ0FBQztJQUNELGVBQWU7UUFDYixJQUFJLENBQUMsR0FBRzthQUNMLEtBQUssQ0FBQyxhQUFhLENBQUM7YUFDcEIsSUFBSSxDQUNILCtCQUFvQixDQUFDLGVBQWUsRUFDcEMsK0JBQW9CLENBQUMsY0FBYyxDQUNwQyxDQUFDO1FBQ0osT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2xCLENBQUM7Q0FDRjtBQWJELDRDQWFDIn0=
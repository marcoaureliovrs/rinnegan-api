"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = require("../../modules/Alert/routes");
class Routes {
    // constructor() { }
    initRoutes(app) {
        app.route('/api/alerts/all').get(routes_1.default.index);
        app.route('/api/alerts/top').get(routes_1.default.getTopAlerts);
        app.route('/api/alerts').post(routes_1.default.create);
        app.route('/api/alerts/:id').put(routes_1.default.update);
        app.route('/api/alerts/:id').get(routes_1.default.findOne);
        app.route('/api/alerts/:id/destroy').delete(routes_1.default.destroy);
    }
}
exports.default = new Routes();

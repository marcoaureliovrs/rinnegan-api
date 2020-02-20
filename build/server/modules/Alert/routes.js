"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = require("./controller");
class AlertRoutes {
    constructor() { }
    index(req, res) {
        return controller_1.default.getAll(req, res);
    }
    getTopAlerts(req, res) {
        return controller_1.default.getTopAlerts(req, res);
    }
    create(req, res) {
        return controller_1.default.createAlert(req, res);
    }
    findOne(req, res) {
        return controller_1.default.getById(req, res);
    }
    update(req, res) {
        return controller_1.default.updateAlert(req, res);
    }
    destroy(req, res) {
        return controller_1.default.deleteAlert(req, res);
    }
}
exports.default = new AlertRoutes();

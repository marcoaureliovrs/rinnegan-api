"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interface_1 = require("./interface");
const model = require('../../models');
class Alert {
    constructor() { }
    create(alert) {
        return model.Alert.create(alert);
    }
    getAll() {
        return model.Alert.findAll({
            order: ['server']
        })
            .then(interface_1.createAlerts);
    }
    getById(id) {
        return model.Alert.findOne({
            where: { id }
        })
            .then(interface_1.createAlertById);
    }
    update(id, alert) {
        return model.Alert.update(alert, {
            where: { id },
            fields: ['description', 'created_at', 'server_type',],
            hooks: true,
            individualHooks: true
        });
    }
    delete(id) {
        return model.Alert.destroy({
            where: { id }
        });
    }
    getTopAlerts() {
        return model.Alert.count({
            attributes: ['server', [sequelize.fn('count', sequelize.col('server')), 'count']],
            group: ['Alert.server'],
            limit: 3,
        }).then(topAlerts => {
            console.log(topAlerts);
            return topAlerts;
        });
    }
}
exports.default = new Alert();

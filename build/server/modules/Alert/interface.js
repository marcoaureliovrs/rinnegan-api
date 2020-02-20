"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createAlert({ id, server, description, created_at, server_type, }) {
    return {
        id,
        server,
        description,
        created_at,
        server_type,
    };
}
exports.createAlert = createAlert;
function createAlerts(data) {
    return data.map(createAlert);
}
exports.createAlerts = createAlerts;
function createAlertById({ id, server, description, created_at, server_type, }) {
    return {
        id,
        server,
        description,
        created_at,
        server_type,
    };
}
exports.createAlertById = createAlertById;

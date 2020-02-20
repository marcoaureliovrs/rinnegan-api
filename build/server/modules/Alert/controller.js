"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const handlers_1 = require("../../api/responses/handlers");
const service_1 = require("./service");
class AlertController {
    constructor() { }
    getAll(req, res) {
        service_1.default
            .getAll()
            .then(_.partial(handlers_1.default.onSuccess, res))
            .catch(_.partial(handlers_1.default.onError, res, `Erro ao buscar todos os alertas`));
    }
    getTopAlerts(req, res) {
        service_1.default
            .getTopAlerts()
            .then(_.partial(handlers_1.default.onSuccess, res))
            .catch(_.partial(handlers_1.default.onError, res, `Erro ao listar o top 3 de servidores que possuem mais erros`));
    }
    createAlert(req, res) {
        service_1.default
            .create(req.body)
            .then(_.partial(handlers_1.default.onSuccess, res))
            .catch(_.partial(handlers_1.default.dbErrorHandler, res))
            .catch(_.partial(handlers_1.default.onError, res, `Erro ao inserir novo usuário`));
    }
    getById(req, res) {
        const userId = parseInt(req.params.id);
        service_1.default.getById(userId)
            .then(_.partial(handlers_1.default.onSuccess, res))
            .catch(_.partial(handlers_1.default.onError, res, `Alerta não encontrado`));
    }
    updateAlert(req, res) {
        const alertId = parseInt(req.params.id);
        const props = req.body;
        service_1.default.update(alertId, props)
            .then(_.partial(handlers_1.default.onSuccess, res))
            .catch(_.partial(handlers_1.default.onError, res, `Falha ao atualizar alerta`));
    }
    deleteAlert(req, res) {
        const alertId = parseInt(req.params.id);
        service_1.default.delete(alertId)
            .then(_.partial(handlers_1.default.onSuccess, res))
            .catch(_.partial(handlers_1.default.onError, res, `Erro ao excluir alerta`));
    }
}
exports.default = new AlertController();

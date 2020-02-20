"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HTTPStatus = require("http-status");
const config = require('../../config/env/config')();
class Handlers {
    constructor() { }
    onSuccess(res, data) {
        return res.status(HTTPStatus.OK).json({ payload: data });
    }
    onError(res, message, err) {
        console.log(`Error: ${err}`);
        return res.status(HTTPStatus.INTERNAL_SERVER_ERROR).send(message);
    }
    dbErrorHandler(res, err) {
        console.log(`Um erro aconteceu: ${err}`);
        return res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({
            code: 'ERR-01',
            message: 'Erro ao criar alerta'
        });
    }
    errorHandlerApi(err, req, res, next) {
        console.error(`API error handler foi executada: ${err}`);
        return res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({
            errorCode: 'ERR-001',
            message: 'Erro Interno do Servidor'
        });
    }
}
exports.default = new Handlers();

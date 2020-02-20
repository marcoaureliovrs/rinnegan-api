"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const routes_1 = require("./routes/routes");
const handlers_1 = require("./responses/handlers");
class Api {
    constructor() {
        this.express = express();
        this.middleware();
    }
    middleware() {
        this.express.use(function (req, res, next) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
            next();
        });
        this.express.use(morgan('dev'));
        this.express.use(bodyParser.urlencoded({ extended: true }));
        this.express.use(bodyParser.json());
        this.express.use(handlers_1.default.errorHandlerApi);
        this.router(this.express);
    }
    router(app) {
        routes_1.default.initRoutes(app);
    }
}
exports.default = new Api().express;

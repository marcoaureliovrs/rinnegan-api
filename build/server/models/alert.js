"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require('moment');
function default_1(sequelize, DataTypes) {
    const Alert = sequelize.define('Alert', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        server: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        created_at: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: moment().toISOString(),
            validate: {
                notEmpty: true
            }
        },
        server_type: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
    }, {
        // disable the modification of table names; By default, sequelize will automatically
        // transform all passed model names (first parameter of define) into plural.
        // if you don't want that, set the following
        freezeTableName: true,
        sync: { force: true },
    });
    return Alert;
}
exports.default = default_1;

module.exports = (function () {
    'use strict';

    const Sequelize = require("sequelize");
    const externalRoutes = require('express').Router();
    const apiPrefix = '/api/v1';
    const sequelize = new Sequelize('node_restapi', 'root', '123@#abc', {
        host: 'localhost',
        dialect: 'mysql',
        dialectOptions: {
            socketPath: '/var/run/mysqld/mysqld.sock',
            supportBigNumbers: true,
            bigNumberStrings: true
        },
    });

    sequelize.authenticate().then(() => {
        console.log('Connection has been established successfully.');
    }).catch((error) => {
        console.error('Unable to connect to the database: ', error);
        exit();
    });



    externalRoutes.get(`${apiPrefix}/users`, (req, res) => {
        let sqlQuery = "SELECT * FROM users";
        sequelize.query(
            sqlQuery,
            {
                type: sequelize.QueryTypes.SELECT
            }
        ).then(result => {
            res.send(apiResponse(result));
        }).catch((error) => {
            if (error) throw err;
        });
    });

    externalRoutes.get(`${apiPrefix}/user/:id`, (req, res) => {
        console.log(req.params.id)

        let sqlQuery = `SELECT * FROM users Where id = ${req.params.id}`;
        sequelize.query(
            sqlQuery,
            {
                type: sequelize.QueryTypes.SELECT
            }
        ).then(result => {
            res.send(apiResponse(result));
        }).catch((error) => {
            if (error) throw err;
        });

    });

    externalRoutes.get('*', function (req, res) {
        res.status(404).send(apiResponse('Page Not Found'));
    });

    function apiResponse(results) {

        if (results.length > 0) {
            return JSON.stringify({ "status": 200, "error": null, "response": results });
        } else {
            return JSON.stringify({ "status": 200, "error": null, "response": "No Data Found" });
        }
    }

    return externalRoutes;
})();
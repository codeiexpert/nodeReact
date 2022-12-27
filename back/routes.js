module.exports = (function () {
    'use strict';

    const Sequelize = require("sequelize");
    const externalRoutes = require('express').Router();
    const apiPrefix = '/api/v1';
    const sequelize = new Sequelize(
        'selling_partner', 
        'root', '', {
        host: 'localhost',
        dialect: 'mysql',
        // dialectOptions: {
        //     socketPath: '/var/run/mysqld/mysqld.sock',
        //     supportBigNumbers: true,
        //     bigNumberStrings: true
        // },
    });

    sequelize.authenticate().then(() => {
        console.log('Connection has been established successfully.');
    }).catch((error) => {
        console.error('Unable to connect to the database: ', error);
        exit();
    });



    externalRoutes.get(`${apiPrefix}/login`, (req, res) => {
        apiResponse(true);
        // let sqlQuery = `SELECT * FROM roles Where name="Administrator"`;
        // sequelize.query(
        //     sqlQuery,
        //     {
        //         type: sequelize.QueryTypes.SELECT
        //     }
        // ).then(result => {
        //     res.send(apiResponse(result));
        // }).catch((error) => {
        //     if (error) throw err;
        // });
    });

    externalRoutes.post(`${apiPrefix}/register`, (req, res) => {
        let sqlQuery = "SELECT * FROM roles";
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

    externalRoutes.get(`${apiPrefix}/role/:id`, (req, res) => {
        console.log(req.params.id)

        let sqlQuery = `SELECT * FROM roles Where id = ${req.params.id}`;
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

    function apiResponse(results) {

        if (results.length > 0) {
            return JSON.stringify({ "status": 200, "success": true, "response": results });
        } else {
            return JSON.stringify({ "status": 200, "error": true, "response": "No Data Found" });
        }
    }

    return externalRoutes;
})();
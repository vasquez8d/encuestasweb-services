/**
 * EncuestasController
 *
 * @description :: Server-side logic for managing Encuestas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    create: function(req, res){
        var dataResponse = {
            data_result: "",
            res_service: "error",
            des_error: ""
        };
        var dataCreate = req.allParams();        
        Encuestas.create(dataCreate, function (err, response) {
            if (err) {                
                dataResponse.res_service = "Error creando la encuesta.";
                dataResponse.des_error = err;
            } else {                
                response.save();
                dataResponse.data_result = response;
                dataResponse.res_service = "ok";
            }
            res.json(dataResponse);
        });
    },
    details: function(req, res){
        var dataResponse = {
            data_result: "",
            res_service: "error",
            des_error: ""
        };
        var dataSearch = req.allParams();
        var query = "select * from tbl_encuestas p where p.encs_id = p1";
        var finalQuery = query.replace('p1', dataSearch.encs_id);
        Candidatos.query(finalQuery, function (err, result) {
           if (err) {
                dataResponse.res_service = "Error buscando candidatos";
                dataResponse.des_error = err;
                res.json(dataResponse)
           }
           if (result.rows.length > 0) {
                dataResponse.data_result = result.rows;
                dataResponse.res_service = "ok";
                res.json(dataResponse)
           } else {
                dataResponse.res_service = "No existe información.";
                res.json(dataResponse)
           }
        });
    },
    listultimos: function(req, res){
        var dataResponse = {
            data_result: "",
            res_service: "error",
            des_error: ""
        };
        var dataSearch = req.allParams();
        var query = "select * from (select * from tbl_encuestas p order by to_date(p.encs_fec_registro, 'DD/MM/YYYY HH:MI:SS') desc) tmp limit p1 offset p2;";
        var finalQuery = query.replace('p1', dataSearch.limit).replace('p2', dataSearch.offset);
        Candidatos.query(finalQuery, function (err, result) {
           if (err) {
                dataResponse.res_service = "Error buscando candidatos";
                dataResponse.des_error = err;
                res.json(dataResponse)
           }
           if (result.rows.length > 0) {
                dataResponse.data_result = result.rows;
                dataResponse.res_service = "ok";
                res.json(dataResponse)
           } else {
                dataResponse.res_service = "No existe información.";
                res.json(dataResponse)
           }
        });
    },
    listxsearch: function(req, res){
        var dataResponse = {
            data_result: "",
            res_service: "error",
            des_error: ""
        };
        var dataSearch = req.allParams();
        var query = "";
        Candidatos.query(query, function (err, result) {
           if (err) {
                dataResponse.res_service = "Error buscando candidatos";
                dataResponse.des_error = err;
                res.json(dataResponse)
           }
           if (result.rows.length > 0) {
                dataResponse.data_result = result.rows;
                dataResponse.res_service = "ok";
                res.json(dataResponse)
           } else {
                dataResponse.res_service = "No existe información.";
                res.json(dataResponse)
           }
        });
    },
    listhome: function(req, res){
        var dataResponse = {
            data_result: "",
            res_service: "error",
            des_error: ""
        };
        var dataSearch = req.allParams();
        var query = "";
        Candidatos.query(query, function (err, result) {
           if (err) {
                dataResponse.res_service = "Error buscando candidatos";
                dataResponse.des_error = err;
                res.json(dataResponse)
           }
           if (result.rows.length > 0) {
                dataResponse.data_result = result.rows;
                dataResponse.res_service = "ok";
                res.json(dataResponse)
           } else {
                dataResponse.res_service = "No existe información.";
                res.json(dataResponse)
           }
        });        
    }
};

/**
 * CandidatosController
 *
 * @description :: Server-side logic for managing Candidatos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    search: function(req, res){
        var dataResponse = {
            data_result: "",
            res_service: "error",
            des_error: ""
        };
        var dataSearch = req.allParams();
        var query = sails.config.querys.candidato_query_search.replace('?1', dataSearch.cand_search).replace('?2', dataSearch.cand_search).replace('?3', dataSearch.cand_search);
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
    create: function(req, res){
        var dataResponse = {
            data_result: "",
            res_service: "error",
            des_error: ""
        };
        var dataCreate = req.allParams();        
        Candidatos.create(dataCreate, function (err, response) {
            if (err) {                
                dataResponse.res_service = "Error creando el candidato.";
                dataResponse.des_error = err;
            } else {                
                response.save();
                dataResponse.data_result = response;
                dataResponse.res_service = "ok";
            }
            res.json(dataResponse);
        });
    },	
};


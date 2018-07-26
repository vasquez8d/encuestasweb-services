/**
 * CandidaturaController
 *
 * @description :: Server-side logic for managing candidaturas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	list: function(req, res){
        var dataResponse = {
            data_result: "",
            res_service: "error",
            des_error: ""
        };
        var query = "select * from tbl_tipo_candidatura;"
        Candidatos.query(query, function (err, result) {
           if (err) {
                dataResponse.res_service = "Error buscando tipos de candidatura";
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


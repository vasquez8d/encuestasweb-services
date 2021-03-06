/**
 * PartidoPoliticoController
 *
 * @description :: Server-side logic for managing Partidopoliticoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	list: function(req, res){
        var dataResponse = {
            data_result: "",
            res_service: "error",
            des_error: ""
        };
        var query = "select * from tbl_partido_politico p where p.part_est_registro = '1';"
        PartidoPolitico.query(query, function (err, result) {
           if (err) {
                dataResponse.res_service = "Error listando los partidos politicos";
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


/**
 * UbigeosController
 *
 * @description :: Server-side logic for managing ubigeos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    departamentos: function(req, res){
        var dataResponse = {
            data_result: "",
            res_service: "error",
            des_error: ""
        };        
        var query = "select * from tbl_ubigeos p where p.ubg_dst = 0 and p.ubg_prv = 0 and p.ubg_dpt != 99;";
        Ubigeos.query(query, function (err, result) {
           if (err) {
                dataResponse.res_service = "Error listando departamentos";
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
    provincias: function(req, res){
        var dataResponse = {
            data_result: "",
            res_service: "error",
            des_error: ""
        };     
        var dataSearch = req.allParams();
        var query = "select * from tbl_ubigeos p where p.ubg_dpt = ? and p.ubg_dst = 0 and p.ubg_prv != 0;";
        var finalQuery = query.replace('?', dataSearch.ubg_dpt);
        Ubigeos.query(finalQuery, function (err, result) {
           if (err) {
                dataResponse.res_service = "Error listando provincias";
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
    distritos: function(req, res){
        var dataResponse = {
            data_result: "",
            res_service: "error",
            des_error: ""
        };     
        var dataSearch = req.allParams();
        var query = "select * from tbl_ubigeos p where p.ubg_dpt = ?1 and p.ubg_prv = ?2 and p.ubg_dst != 0;";
        var finalQuery = query.replace('?1', dataSearch.ubg_dpt).replace('?2', dataSearch.ubg_prv);
        Ubigeos.query(finalQuery, function (err, result) {
           if (err) {
                dataResponse.res_service = "Error listando distritos";
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


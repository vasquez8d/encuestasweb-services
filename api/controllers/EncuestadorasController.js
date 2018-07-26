/**
 * EncuestadorasController
 *
 * @description :: Server-side logic for managing Encuestadoras
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  list: function (req, res) {
    var dataResponse = {
      data_result: "",
      res_service: "error",
      des_error: ""
    };
    var query = "select * from tbl_encuestadoras p where p.encu_est_registro = '1';"
    Encuestadoras.query(query, function (err, result) {
      if (err) {
        dataResponse.res_service = "Error buscando encuestadoras";
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

/**
 * Candidatos.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'tbl_candidatos',
    attributes: {
      cand_id: {
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        type: "integer"
      },
      cand_nombre: 'string',
      cand_ape_pat: 'string',
      cand_ape_mat: 'string',
      part_id: 'integer',
      cand_link_fb: 'string',
      cand_link_twt: 'string',
      cand_link_inst: 'string',
      cand_img_url: 'string',
      cand_flg_prv: 'integer',
      cand_ubigeo_prv: 'string',
      cand_flg_dst: 'integer',
      cand_ubigeo_dist: 'string',
      cand_est_registro: {
        type: 'integer',
        defaultsTo: 1
      },
      cand_fec_registro: {
        type: 'string',
        defaultsTo: function () {
          var d = new Date();
          var dateFormat = ("00" + d.getDate()).slice(-2) + "/" + 
            ("00" + (d.getMonth() + 1)).slice(-2) + "/" +            
            d.getFullYear() + " " +
            ("00" + d.getHours()).slice(-2) + ":" +
            ("00" + d.getMinutes()).slice(-2) + ":" +
            ("00" + d.getSeconds()).slice(-2);
          return dateFormat;
        }
      },
      cand_user_id: 'integer'
    },
    autoCreatedAt: false,
    autoUpdatedAt: false
};

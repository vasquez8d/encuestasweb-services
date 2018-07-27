/**
 * Encuestas.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'tbl_encuestas',
  attributes: {
    encs_id: {
      primaryKey: true,
      unique: true,
      autoIncrement: true,
      type: "integer"
    },
    encs_titulo: 'string',
    encs_resumen: 'string',
    encs_slug: 'string',
    encs_html: 'string',
    encu_id: 'integer',
    tcan_id: 'integer',
    encu_ubigeo: 'string',
    encs_est_registro: {
      type: 'string',
      defaultsTo: "1"
    },
    encs_fec_registro: {
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
    encs_user_id: 'integer',
    encs_img_url: 'string'
  },
  autoCreatedAt: false,
  autoUpdatedAt: false
};

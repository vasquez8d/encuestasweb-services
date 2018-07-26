/**
 * Candidatura.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'tbl_tipo_candidatura',
  attributes: {
    tcan_id: {
      primaryKey: true,
      unique: true,
      autoIncrement: true,
      type: "integer"
    },
    tcan_desc: 'string',
    tcan_est_registr: {
      type: 'integer',
      defaultsTo: 1
    },
    tcan_fec_registro: {
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
    }
  },
  autoCreatedAt: false,
  autoUpdatedAt: false
};

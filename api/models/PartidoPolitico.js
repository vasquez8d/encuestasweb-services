/**
 * PartidoPolitico.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'tbl_partido_politico',
  attributes: {
    part_id: {
      primaryKey: true,
      unique: true,
      autoIncrement: true,
      type: "integer"
    },
    part_nombre: 'string',
    part_siglas: 'string',
    part_lider: 'string',
    part_logo_url: 'string',
    part_est_registro: {
      type: 'string',
      defaultsTo: "1"
    },
    part_fec_registro: {
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


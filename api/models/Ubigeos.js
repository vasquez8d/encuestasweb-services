/**
 * Ubigeos.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'tbl_ubigeos',
  attributes: {
    ubg_id: {
      primaryKey: true,
      unique: true,
      autoIncrement: true,
      type: "integer"
    },
    ubg_dpt: 'integer',
    ubg_prv: 'integer',
    ubg_dst: 'integer',
    ubg_desc: 'string',
  },
  autoCreatedAt: false,
  autoUpdatedAt: false
};
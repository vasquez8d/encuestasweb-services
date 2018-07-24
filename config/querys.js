module.exports.querys = {
  candidato_query_search: "select * from tbl_candidatos p where p.cand_nombre like '%?1%' or p.cand_ape_pat like '%?2%' or p.cand_ape_mat like '%?3%';",
};
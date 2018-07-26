create table tbl_encuestas
(encs_id int,
 encs_titulo varchar(200),
 encs_resumen varchar(200),
 encs_slug varchar(200),
 encs_html varchar(5000),
 encu_id int,
 encs_est_registro bit,
 encs_fec_registro varchar(20),
 encs_user_id int,
constraint tbl_encuesta_pk primary key (encs_id));

create table tbl_encuesta_online_cab
(encu_cab_id int,
 encu_est_registro bit,
 encu_fec_inicio varchar(20),
 encu_fec_finaliza varchar(20),
 encu_flg_prv bit,
 encu_ubigeo_prv varchar(10),
 encu_flg_dst bit,
 encu_ubigeo_dst varchar(10),
 encu_fec_registro varchar(20),
 encu_nsnp_votos int,
 encu_user_id int,
 constraint tbl_encue_online_cab_pk primary key (encu_cab_id));

create table tbl_encuesta_online_det
(encu_cab_id int,
 encu_det_id int,
 cand_id int,
 encu_num_votos int,
 encu_det_user_id int,
 constraint tbl_encu_online_det_pk primary key (encu_det_id));

create table tbl_usuarios
(user_id int,
 user_mail varchar(100),
 user_pri_nombre varchar(30),
 user_seg_nombre varchar(30),
 user_ape_pat varchar(30),
 user_ape_mat varchar(30),
 user_est_registro bit,
 user_fec_regustri varchar(20),
 constraint tbl_usuarios_pk primary key (user_id));

create table tbl_encuestadoras
(encu_id int,
 encu_nombre varchar(100),
 encu_desc varchar(200),
 encu_est_registro bit,
 encu_fec_registro varchar(20),
 encu_user_id int,
 constraint tbl_encuestadoras_pk primary key (encu_id));

create table tbl_candidatos
(cand_id int,
 cand_nombre varchar(100),
 cand_ape_pat varchar(30),
 cand_ape_mat varchar(30),
 part_id int,
 cand_link_fb varchar(500),
 cand_link_twt varchar(500),
 cand_link_inst varchar(500),
 cand_img_url varchar(500),
 tcan_id int,
 cand_ubigeo varchar(10),
 cand_est_registro bit,
 cand_fec_registro varchar(20),
 cand_user_id int,
 constraint tbl_candidatos_pk primary key (cand_id));

create table tbl_tipo_candidatura
(tcan_id int,
 tcan_desc varchar(150),
 tcan_est_registr bit,
 tcan_fec_registro varchar(20));

create table tbl_partido_politico
(part_id int,
 part_nombre varchar(200),
 part_siglas varchar(50),
 part_lider varchar(200),
 part_logo_url varchar(500),
 part_est_registro bit,
 part_fec_registro varchar(20),
 constraint tbl_partido_politico_pk primary key (part_id));

create table tbl_suscripciones
(subs_id int,
 subs_mail varchar(100),
 subs_status bit,
 susb_est_registro bit,
 subs_fec_registro varchar(20),
 subs_user_id int,
 subs_fec_actualiza varchar(20),
 subs_user_act_id int,
 constraint tbl_suscripciones_pk primary key (subs_id));

create table tbl_ubigeos
(ubg_id int,
 ubg_dpt int,
 ubg_prv int,
 ubg_dst int,
 ubg_desc varchar(100),
 constraint tbl_ubigeos_pk primary key (ubg_id));
 
create sequence tbl_encuestas_seq
 start with 1
 increment by 1;
--nextval('tbl_encuestas_seq')

create sequence tbl_encuesta_online_cab_seq
  start with  1
  increment  by  1;
--nextval('tbl_encuesta_online_cab_seq')

create sequence tbl_encuesta_online_det_seq
  start with 1
  increment by 1;
--nextval('tbl_encuesta_online_det_seq')

create sequence tbl_usuarios_seq
  start with 1
  increment by 1  ;
--nextval('tbl_usuarios_seq')

create sequence tbl_encuestadoras_seq
  start with 1
  increment by 1  ;
--nextval('tbl_encuestadoras_seq')

create sequence tbl_candidatos_seq
  start with 1
  increment by 1;
--nextval('tbl_candidatos_seq')

create sequence tbl_partido_politico_seq
  start with 1
  increment by 1 ;
--nextval('tbl_partido_politico_seq')

create sequence tbl_suscripciones_seq
  start with 1
  increment by 1;
--nextval('tbl_suscripciones_seq')
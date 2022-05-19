CREATE DATABASE covidmx;

CREATE TABLE admins(
    admin_id SERIAL PRIMARY KEY,
    email VARCHAR(64),
    pass VARCHAR(64)
);

DROP TABLE IF EXISTS patients;

CREATE TABLE patients(
    patientid SERIAL PRIMARY KEY,
    fecha_actualizacion VARCHAR(11) NOT NULL,
    id_registro VARCHAR(16),
    origen SMALLINT, 
    sector SMALLINT,
    entidad_um SMALLINT NOT NULL,
    sexo SMALLINT,
    entidad_nac SMALLINT,
    entidad_res SMALLINT,
    tipo_paciente SMALLINT, 
    fecha_ingreso VARCHAR(11),
    fecha_sintomas VARCHAR(11),
    fecha_def VARCHAR(11) DEFAULT '9999-99-99',
    intubado SMALLINT DEFAULT 99, 
    neumonia SMALLINT DEFAULT 99,
    edad SMALLINT,
    nacionalidad SMALLINT,
    embarazo SMALLINT DEFAULT 99,
    diabetes SMALLINT DEFAULT 99,
    asma SMALLINT DEFAULT 99,
    inmusupr SMALLINT DEFAULT 99,
    hipertension SMALLINT DEFAULT 99,
    cardiovascular SMALLINT DEFAULT 99,
    obesidad SMALLINT DEFAULT 99,
    renal_cronica SMALLINT DEFAULT 99,
    tabaquismo SMALLINT DEFAULT 99,
    otro_caso SMALLINT DEFAULT 98,
    toma_muestra_lab SMALLINT,
    resultado_lab SMALLINT,
    toma_muestra_antigeno SMALLINT,
    resultado_antigeno SMALLINT,
    clasificacion_final SMALLINT,
    migrante SMALLINT DEFAULT 99,
    pais_nacionalidad TEXT,
    uci SMALLINT DEFAULT 99
);


/* EXAMPLE INSERT QUERY */
INSERT INTO patients (fecha_actualizacion, id_registro, origen, sector, entidad_um, sexo, 
entidad_nac, entidad_res, tipo_paciente, fecha_ingreso, fecha_sintomas, fecha_def, intubado,
neumonia, edad, nacionalidad, embarazo, diabetes, asma, inmusupr, hipertension, cardiovascular,
obesidad, renal_cronica, tabaquismo, otro_caso, toma_muestra_lab, resultado_lab, toma_muestra_antigeno,
resultado_antigeno, clasificacion_final, migrante, pais_nacionalidad, uci) VALUES(
    "AAAA-MM-DD", 
    "TestReg0", 
    1, 2, 3, 1, 1, 1, 1, 
    "AAAA-MM-DD", "AAAA-MM-DD", "AAAA-MM-DD", 
    99, 99, 76, 
    1, 99, 99, 99, 99, 99, 99, 99, 99, 99, 98,
    1, 1, 1, 1, 1,
    99, "Somewhere",
    99
);
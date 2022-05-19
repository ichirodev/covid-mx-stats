const { Client } = require("pg");
const fs = require("fs");
const lblr = require("line-by-line");
const { parse } = require("csv-parse");
const { delimiter } = require("path");
const { isUndefined } = require("util");

const csv = "COVID19MEXICO.csv";

const dbClient = new Client({
  host: "localhost",
  password: "Zawarudo",
  database: "covidmx",
  user: "postgres",
  port: 5432,
});

const connectToDatabase = async () => {
  await dbClient.connect();
  //const res = await dbClient.query("DELETE FROM patients");
  const res = await dbClient.query("SELECT * FROM admins");
  return res;
};

function num(n) {
  if (isNaN(n)) {
    return 99;
  }
  if (isUndefined(n)) {
    return 99;
  }
  const v = parseInt(n.replace(/^"(.*)"$/, "$1"), 10);
  if (v == "nan" || v == NaN) {
    return 99;
  }
  return v;
}

connectToDatabase().then(async function (res) {
  var i = 0;
  var jumpTo = 0;
  var lr = new lblr(csv);
  console.log("Connection to the database: DONE!");
  console.log("Reading data and sending to the database");
  var queriesSent = 0;
  var startTime = Date.now();
  var stopTime;
  var timeElapsed = 0;
  var nextPrintTime = 0;
  var fecha_actualizacion;
  var id_registro;
  var origen;
  var sector;
  var entidad_um;
  var sexo;
  var entidad_nac;
  var entidad_res;
  var tipo_paciente;
  var fecha_ingreso;
  var fecha_sintomas;
  var fecha_def;
  var intubado;
  var neumonia;
  var edad;
  var nacionalidad;
  var embarazo;
  var diabetes;
  var asma;
  var inmunosupr;
  var hipertension;
  var cardiovascular;
  var obesidad;
  var renal_cronica;
  var tabaquismo;
  var otro_caso;
  var toma_muestra_lab;
  var resultado_lab;
  var toma_muestra_antigeno;
  var resultado_antigeno;
  var clasificacion_final;
  var migrante;
  var pais_nacionalidad;
  var uci;
  var queryResponse;
  queryResponse = await dbClient.query(`SELECT COUNT(*) FROM patients`);
  if (parseInt(queryResponse.rows[0].count) > 0) {
    i = parseInt(queryResponse.rows[0].count);
    console.log(i, " Queries already sent from the file");
  }
  lr.on("line", async function (line) {
    if (i < jumpTo) {
      i++;
      return;
    }
    if (queriesSent == 0) {
      queriesSent++;
      return;
    } else {
      let row = line.split(",");

      if (row[1] === undefined || row.includes(NaN)) {
        return;
      }

      fecha_actualizacion = row[0].replace(/^"(.*)"$/, "$1");
      id_registro = row[1].replace(/^"(.*)"$/, "$1");
      origen = num(row[2]);
      sector = num(row[3]);
      entidad_um = num(row[4]);
      sexo = num(row[5]);
      entidad_nac = num(row[6]);
      entidad_res = num(row[7]);
      tipo_paciente = num(row[9]);
      fecha_ingreso = row[10].replace(/^"(.*)"$/, "$1");
      fecha_sintomas = row[11].replace(/^"(.*)"$/, "$1");
      fecha_def = row[12].replace(/^"(.*)"$/, "$1");
      intubado = num(row[13]);
      neumonia = num(row[14]);
      edad = num(row[15]);
      nacionalidad = num(row[16]);
      embarazo = num(row[17]);
      diabetes = num(row[20]);
      asma = num(row[22]);
      inmunosupr = num(row[23]);
      hipertension = num(row[24]);
      otra_comp = num(row[25]);
      cardiovascular = num(row[26]);
      obesidad = num(row[27]);
      renal_cronica = num(row[28]);
      tabaquismo = num(row[29]);
      otro_caso = num(row[30]);
      toma_muestra_lab = num(row[31]);
      resultado_lab = num(row[32]);
      toma_muestra_antigeno = num(row[33]);
      resultado_antigeno = num(row[34]);
      clasificacion_final = num(row[35]);
      migrante = num(row[36]);
      pais_nacionalidad = row[37].replace(/^"(.*)"$/, "$1");
      uci = num(row[39]);

      lr.pause();

      /*
      queryResponse = await dbClient.query(
        `SELECT id_registro FROM patients WHERE id_registro='${id_registro}'`
      );

      if (queryResponse.rows[0].id_registro == id_registro) {
        return;
      }
      */

      let query_ = `INSERT INTO patients (fecha_actualizacion, 
        id_registro, origen, sector, 
        entidad_um, sexo, entidad_nac, 
        entidad_res, tipo_paciente, fecha_ingreso, 
        fecha_sintomas, fecha_def, intubado,
        neumonia, edad, nacionalidad, 
        embarazo, diabetes, asma, 
        inmusupr, hipertension, cardiovascular,
        obesidad, renal_cronica, tabaquismo, 
        otro_caso, toma_muestra_lab, resultado_lab, 
        toma_muestra_antigeno, resultado_antigeno, clasificacion_final, 
        migrante, pais_nacionalidad, uci) VALUES (
            '${fecha_actualizacion}', '${id_registro}', ${origen}, ${sector},
            ${entidad_um}, ${sexo}, ${entidad_nac},
            ${entidad_res}, ${tipo_paciente}, '${fecha_ingreso}', 
            '${fecha_sintomas}', '${fecha_def}', ${intubado}, 
            ${neumonia}, ${edad}, ${nacionalidad}, 
            ${embarazo}, ${diabetes}, ${asma}, 
            ${inmunosupr}, ${hipertension}, ${cardiovascular},
            ${obesidad}, ${renal_cronica}, ${tabaquismo},
            ${otro_caso}, ${toma_muestra_lab}, ${resultado_lab},
            ${toma_muestra_antigeno}, ${resultado_antigeno}, ${clasificacion_final},
            ${migrante}, '${pais_nacionalidad}', ${uci}
        )`;

      queryResponse = await dbClient.query(query_);

      lr.resume();
      i++;
      queriesSent++;
      stopTime = Date.now();
      timeElapsed = (stopTime - startTime) / 1000;
      if (parseInt(timeElapsed) > nextPrintTime) {
        console.log(
          "Queries: ",
          queriesSent,
          "\t\tTime elapsed ",
          timeElapsed,
          "s"
        );
        nextPrintTime = parseInt(timeElapsed) + 50;
      }
    }
  });

  /*
  // DO NOT USE THIS METHOD, IT EATS RAM
  var s = fs
    .createReadStream("./" + csv)
    .pipe(parse({ delimiter: ",", from_line: 2 }))
    .on("data", async function (row) {
      fecha_actualizacion = row[0];
      id_registro = row[1];
      origen = row[2];
      sector = row[3];
      entidad_um = row[4];
      sexo = row[5];
      entidad_nac = row[6];
      entidad_res = row[7];
      tipo_paciente = row[9];
      fecha_ingreso = row[10];
      fecha_sintomas = row[11];
      fecha_def = row[12];
      intubado = row[13];
      neumonia = row[14];
      edad = row[15];
      nacionalidad = row[16];
      embarazo = row[17];
      diabetes = row[20];
      asma = row[22];
      inmunosupr = row[23];
      hipertension = row[24];
      otra_comp = row[25];
      cardiovascular = row[26];
      obesidad = row[27];
      renal_cronica = row[28];
      tabaquismo = row[29];
      otro_caso = row[30];
      toma_muestra_lab = row[31];
      resultado_lab = row[32];
      toma_muestra_antigeno = row[33];
      resultado_antigeno = row[34];
      clasificacion_final = row[35];
      migrante = row[36];
      pais_nacionalidad = row[37];
      uci = row[39];

      if (id_registro === undefined) {
        return;
      }

      queryResponse = await dbClient.query(
        `INSERT INTO patients (fecha_actualizacion, 
            id_registro, origen, sector, 
            entidad_um, sexo, entidad_nac, 
            entidad_res, tipo_paciente, fecha_ingreso, 
            fecha_sintomas, fecha_def, intubado,
            neumonia, edad, nacionalidad, 
            embarazo, diabetes, asma, 
            inmusupr, hipertension, cardiovascular,
            obesidad, renal_cronica, tabaquismo, 
            otro_caso, toma_muestra_lab, resultado_lab, 
            toma_muestra_antigeno, resultado_antigeno, clasificacion_final, 
            migrante, pais_nacionalidad, uci) VALUES (
                '${fecha_actualizacion}', '${id_registro}', ${origen}, ${sector},
                ${entidad_um}, ${sexo}, ${entidad_nac},
                ${entidad_res}, ${tipo_paciente}, '${fecha_ingreso}', 
                '${fecha_sintomas}', '${fecha_def}', ${intubado}, 
                ${neumonia}, ${edad}, ${nacionalidad}, 
                ${embarazo}, ${diabetes}, ${asma}, 
                ${inmunosupr}, ${hipertension}, ${cardiovascular},
                ${obesidad}, ${renal_cronica}, ${tabaquismo},
                ${otro_caso}, ${toma_muestra_lab}, ${resultado_lab},
                ${toma_muestra_antigeno}, ${resultado_antigeno}, ${clasificacion_final},
                ${migrante}, '${pais_nacionalidad}', ${uci}
            )`
      );

      queriesSent++;
      stopTime = Date.now();
      timeElapsed = (stopTime - startTime) / 1000;
      console.log(
        "Queries: ",
        queriesSent,
        ", Time elapsed ",
        timeElapsed,
        "s"
      );
    })
    .on("end", function () {
      console.log("All data has been read with no errors");
      dbClient.end();
    })
    .on("error", function (error) {
      console.error(error.message);
    });
    */
});

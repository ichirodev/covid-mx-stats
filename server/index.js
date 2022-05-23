/**
 * Made by: Ichirodev
 * Check this repository on Github: github.com/ichirodev/covid-mx-stats
 */
const express = require("express");
const cors = require("cors");
const app = express();
const { Client } = require("pg"); // Node-postgres connection
const accessKeys = require("./ak"); // Valid admin access keys for registration
const moment = require("moment");
const { query } = require("express");

/**
 * Misc
 */
const log = console.log;

class patientDateData {
  constructor(time, cases) {
    this.time = time;
    this.cases = cases;
  }

  setTimes(time) {
    this.time = time;
  }

  setCases(cases) {
    this.cases = cases;
  }

  setEntities(entities) {
    this.entities = entities;
  }

  setDates(dates) {
    this.dates = dates;
  }

  setTypes() {
    this.types = [
      "Embarazo",
      "Diabetes",
      "Asma",
      "Inmunosupresion",
      "Hipertension",
      "Cardiovascular",
      "Obesidad",
      "Renal Cronica",
      "Tabaquismo",
    ];
  }

  getDataByEntities() {
    return {
      time: this.time,
      entities: this.entities,
      cases: this.cases,
    };
  }

  getDataByDates() {
    return {
      time: this.time,
      dates: this.dates,
      cases: this.cases,
    };
  }

  getDataByTypes() {
    return {
      time: this.time,
      types: this.types,
      cases: this.cases,
    };
  }
}
// Get a number as a string as a minimum double zero string
function doubleZeroNumberStr(n) {
  if (n >= 10) {
    return n.toString();
  }
  return "0" + n.toString();
}
// Get a number of days back starting from a given date on the format 'YYYY-MM-DD'
async function getDaysBackDates(daysBack) {
  let dateFormat = "YYYY-MM-DD";
  let myDates = [];

  let response = await dbClient.query(
    "SELECT fecha_actualizacion FROM patients LIMIT 1"
  );

  let resDate = response.rows[0].fecha_actualizacion;

  var timeA = moment(resDate);
  timeA.format(dateFormat);

  for (let i = 0; i < daysBack; i++) {
    var timeB = timeA.clone().subtract(i + 1, "days");
    timeB.format(dateFormat);

    var date = {
      year: timeB.year().toString(),
      month: doubleZeroNumberStr(timeB.month() + 1),
      day: doubleZeroNumberStr(timeB.date()),
    };
    myDates.push(date.year + "-" + date.month + "-" + date.day);
  }

  return myDates;
}
// Get the cases on the country for every given date
async function getDateData(dates) {
  casesData = [];

  for (let i = 0; i < dates.length; i++) {
    let patientsDateQuery = `SELECT COUNT(*) FROM patients WHERE fecha_ingreso = '${dates[i]}'`;
    let patientsDateRes = await dbClient.query(patientsDateQuery);
    casesData.push(parseInt(patientsDateRes.rows[0].count));
  }

  return casesData;
}
// Get the list of entities names
function getEntitiesStr() {
  return [
    "AGUASCALIENTES",
    "BAJA CALIFORNIA",
    "BAJA CALIFORNIA SUR",
    "CAMPECHE",
    "COAHUILA DE ZARAGOZA",
    "COLIMA",
    "CHIAPAS",
    "CHIHUAHUA",
    "CIUDAD DE MÉXICO",
    "DURANGO",
    "GUANAJUATO",
    "GUERRERO",
    "HIDALGO",
    "JALISCO",
    "MÉXICO",
    "MICHOACÁN DE OCAMPO",
    "MORELOS",
    "NAYARIT",
    "NUEVO LEÓN",
    "OAXACA",
    "PUEBLA",
    "QUERÉTARO",
    "QUINTANA ROO",
    "SAN LUIS POTOSÍ",
    "SINALOA",
    "SONORA",
    "TABASCO",
    "TAMAULIPAS",
    "TLAXCALA",
    "VERACRUZ DE IGNACIO DE LA LLAVE",
    "YUCATÁN",
    "ZACATECAS",
  ];
}
// Get the list of entities ids
function getEntitiesNum() {
  entitiesNumbers = [];
  for (let i = 1; i < 33; i++) {
    entitiesNumbers.push(i);
  }
  return entitiesNumbers;
}
// Get the list of data by type of a given dates
async function getTypesData(dates) {
  let dateFormat = "YYYY-MM-DD";
  let emb = 0;
  let dia = 0;
  let asma = 0;
  let inmu = 0;
  let hip = 0;
  let card = 0;
  let obes = 0;
  let renal = 0;
  let tab = 0;
  let lowerEpoch = moment(dates[dates.length - 1], dateFormat).valueOf() / 1000;
  let upperEpoch = moment(dates[0], dateFormat).valueOf() / 1000;

  let queryRes = await dbClient.query(`SELECT 

  SUM(
  CASE
  WHEN embarazo = 1 THEN 1
  ELSE 0
  END
  ) AS num_embarazo,
  
  SUM(
  CASE
  WHEN diabetes = 1 THEN 1
  ELSE 0
  END
  ) AS num_diabetes,
  
  SUM(
  CASE
  WHEN asma = 1 THEN 1
  ELSE 0
  END
  ) AS num_asma,
  
  SUM(
  CASE
  WHEN inmusupr = 1 THEN 1
  ELSE 0
  END
  ) AS num_inmu,
  
  SUM(
  CASE
  WHEN hipertension = 1 THEN 1
  ELSE 0
  END
  ) AS num_hiper,
  
  SUM(
  CASE
  WHEN cardiovascular = 1 THEN 1
  ELSE 0
  END
  ) AS num_cardio,
  
  SUM(
  CASE
  WHEN obesidad = 1 THEN 1
  ELSE 0
  END
  ) AS num_obesidad,
  
  SUM(
  CASE
  WHEN renal_cronica = 1 THEN 1
  ELSE 0
  END
  ) AS num_renal,
  
  SUM(
  CASE
  WHEN tabaquismo = 1 THEN 1
  ELSE 0
  END
  ) AS num_taba
  
  FROM patients WHERE EXTRACT(EPOCH from to_timestamp(fecha_ingreso, 'YYYY-MM-DD')) BETWEEN ${lowerEpoch} AND ${upperEpoch}`);

  emb = queryRes.rows[0].num_embarazo;
  dia = queryRes.rows[0].num_diabetes;
  asma = queryRes.rows[0].num_asma;
  inmu = queryRes.rows[0].num_inmu;
  hip = queryRes.rows[0].num_hiper;
  card = queryRes.rows[0].num_cardio;
  obes = queryRes.rows[0].num_obesidad;
  renal = queryRes.rows[0].num_renal;
  tab = queryRes.rows[0].num_taba;

  return [emb, dia, asma, inmu, hip, card, obes, renal, tab];
}
// Get a list with the number of cases respective to the entities given for the dates given
async function getEntityData(dates, entities) {
  let dateFormat = "YYYY-MM-DD";
  let entityData = [];

  let lowerEpoch = moment(dates[dates.length - 1], dateFormat).valueOf() / 1000;
  let upperEpoch = moment(dates[0], dateFormat).valueOf() / 1000;
  for (let j = 0; j < entities.length; j++) {
    let query_ = `SELECT 
    count(*)
    FROM patients
    WHERE entidad_um = ${entities[j]}
    AND EXTRACT(EPOCH from to_timestamp(fecha_ingreso, 'YYYY-MM-DD')) BETWEEN ${lowerEpoch} AND ${upperEpoch}`;
    let queryRes = await dbClient.query(query_);
    entityData.push(queryRes.rows[0].count);
  }
  return entityData;
}

/**
 * Database
 */
const dbClient = new Client({
  host: "localhost",
  password: "Zawarudo",
  database: "covidmx",
  user: "postgres",
  port: 5432,
});

const connectToDatabase = async () => {
  await dbClient.connect();
  const res = await dbClient.query("SELECT * FROM admins");
  return res;
};

/**
 * Middleware
 */
app.use(cors());
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
/**
 * Routes (Queries)
 */
// Create an account
app.post("/signup", async (req, res) => {
  try {
    const { email, password, accessKey } = req.body;
    if (accessKeys.includes(accessKey)) {
      let response = await dbClient.query(
        `INSERT INTO admins(email, pass) VALUES('${email}','${password}')`
      );

      res.json({
        message: "Registered! Try to log-in now",
      });
    } else {
      res.json({
        message: "Invalid access key",
      });
    }
  } catch (err) {
    console.error(err.message);
  }
});
// Login to an existent account
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    let query_ = `SELECT pass FROM admins WHERE email = '${email}'`;
    let response = await dbClient.query(query_);
    let responsePassword = response[0].pass;
    if (responsePassword == password) {
      res.json({
        message: "logged-in",
      });
    } else {
      res.json({
        message: "can not log-in",
      });
    }
  } catch (err) {
    console.error(err.message);
  }
});
// Return the stats per entity
app.post("/entity", async (req, res) => {
  let { reqTime } = req.body;
  try {
    if (reqTime == "month") {
      res.json(patEntityMonthData.getDataByEntities());
    } else if (reqTime == "week") {
      res.json(patEntityWeekData.getDataByEntities());
    } else {
      res.json({
        status: 200,
        message: "can not retrieve any data",
      });
    }
  } catch (err) {
    console.error(err.message);
  }
});
// Return the stats per date for the nation in general (DIRECT REQUEST TO THE DATABASE)
app.get("/date", async (req, res) => {
  let dateFormat = "YYYY-MM-DD";
  let myDates = [];
  let myPatientNumbers = [];
  let { reqTime } = req.body;
  let response = await dbClient.query(
    "SELECT fecha_actualizacion FROM patients LIMIT 1"
  );
  if (reqTime == "month") {
    let resDate = response.rows[0].fecha_actualizacion;

    var timeA = moment(resDate);
    timeA.format(dateFormat);

    for (let i = 0; i < 30; i++) {
      var timeB = timeA.clone().subtract(i + 1, "days");
      timeB.format(dateFormat);

      var date = {
        year: timeB.year().toString(),
        month: doubleZeroNumberStr(timeB.month() + 1),
        day: doubleZeroNumberStr(timeB.date()),
      };

      myDates.push(date.year + "-" + date.month + "-" + date.day);
      let patientsDateQuery = `SELECT COUNT(*) FROM patients WHERE fecha_ingreso = '${myDates[i]}'`;
      let patientsDateRes = await dbClient.query(patientsDateQuery);

      myPatientNumbers.push(parseInt(patientsDateRes.rows[0].count));
    }
  }
  try {
    res.json({
      time: reqTime,
      dates: myDates,
      cases: myPatientNumbers,
    });
  } catch (err) {
    console.error(err.message);
  }
});
// Return
app.post("/dateLatest", async (req, res) => {
  let { reqTime } = req.body;
  if (reqTime == "month") {
    res.json(patDateMonthData.getDataByDates());
    return;
  } else if (reqTime == "week") {
    res.json(patDateWeekData.getDataByDates());
    return;
  }
  res.json({
    message: `can not retrieve any data`,
    status: 200,
  });
});

// Return the stats per type of patient
app.post("/typeLatest", async (req, res) => {
  let { reqTime } = req.body;

  if (reqTime == "month") {
    res.json(patTypeMonthData.getDataByTypes());
    return;
  } else if (reqTime == "week") {
    res.json(patTypeWeekData.getDataByTypes());
    return;
  }
  res.json({
    message: `can not retrieve any data`,
  });
});

// Server
lastMonthDates = [];
lastWeekDates = [];
patDateMonthData = new patientDateData("month", []);
patDateWeekData = new patientDateData("week", []);
patEntityMonthData = new patientDateData("month", []);
patEntityWeekData = new patientDateData("week", []);
patTypeMonthData = new patientDateData("month", []);
patTypeWeekData = new patientDateData("week", []);
PORT = 1337;
app.listen(PORT, () => {
  connectToDatabase().then(async (result) => {
    console.clear();
    log("COVID STATS MX");
    log(`✔️  Connected to database`);
    log(`✔️  Server started in port ${PORT}`);
    log(
      `⌛️ Retrieving information from the database for a faster response...`
    );
    lastMonthDates = await getDaysBackDates(31);
    lastWeekDates = await getDaysBackDates(8);

    lmdd = await getDateData(lastMonthDates);
    patDateMonthData.setDates(lastMonthDates);
    patDateMonthData.setCases(lmdd);

    patDateWeekData.setDates(lastWeekDates);
    patDateWeekData.setCases(lmdd.slice(0, lastWeekDates.length));
    log(`✔️  Fast access information for *date* requests retrieved\t(1/4)`);

    patTypeMonthData.setTypes();
    patTypeWeekData.setTypes();
    patTypeMonthData.setCases(await getTypesData(lastMonthDates));
    patTypeWeekData.setCases(await getTypesData(lastWeekDates));

    log(`✔️  Fast access information for *type* requests retrieved\t(2/4)`);

    patEntityMonthData.setEntities(getEntitiesStr());
    patEntityWeekData.setEntities(getEntitiesStr());
    patEntityMonthData.setCases(
      await getEntityData(lastMonthDates, getEntitiesNum())
    );
    patEntityWeekData.setCases(
      await getEntityData(lastWeekDates, getEntitiesNum())
    );
    log(`✔️  Fast access information for *entity* requests retrieved\t(2/4)`);
    log(`✔️  Fast access information for *other* requests retrieved\t(4/4)`);
    log(`⚡️ SERVER READY!`);
  });
});

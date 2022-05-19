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
/**
 * Misc
 */
const log = console.log;
function doubleZeroNumberStr(n) {
  if (n >= 10) {
    return n.toString();
  }
  return "0" + n.toString();
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
app.get("/entity", async (req, res) => {
  try {
    res.json({
      time: "month",
      entity: ["Jalisco", "Oaxaca", "Tamaulipas"],
      cases: [1300, 1400, 893],
    });
  } catch (err) {
    console.error(err.message);
  }
});

// Return the stats per date for the nation in general
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

// Return the stats per date for the nation in general
app.get("/type", async (req, res) => {
  try {
    let emb = 0;
    let dia = 0;
    let asma = 0;
    let inmu = 0;
    let hip = 0;
    let card = 0;
    let obes = 0;
    let renal = 0;
    let tab = 0;
    res.json({
      time: "month",
      entity: [
        "embarazo",
        "diabetes",
        "asma",
        "inmunosupresion",
        "hipertension",
        "cardiovascular",
        "obesidad",
        "renal_cronica",
        "tabaquismo",
      ],
      cases: [emb, dia, asma, inmu, hip, card, obes, renal, tab],
    });
  } catch (err) {
    console.error(err.message);
  }
});

// Server
PORT = 1337;
app.listen(PORT, () => {
  connectToDatabase().then((result) => {
    log("Connected to database");
    log(`Server started in port ${PORT}`);
  });
});

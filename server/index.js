/**
 * Made by: Ichirodev
 * Check this repository on Github: github.com/ichirodev/covid-mx-stats
 */
const express = require("express");
const cors = require("cors");
const app = express();
const { Client } = require("pg"); // Node-postgres connection
const accessKeys = require("./ak"); // Valid admin access keys for registration

/**
 * Misc
 */
const log = console.log;

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
// Create an user
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

// Server
PORT = 1337;
app.listen(PORT, () => {
  connectToDatabase().then((result) => {
    log("Connected to database");
    log(`Server started in port ${PORT}`);
  });
});

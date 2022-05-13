const { Client } = require("pg");
const fs = require("fs");
const { parse } = require("csv-parse");

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
  const res = await dbClient.query("SELECT * FROM admins");
  return res;
};

connectToDatabase().then((res) => {
  console.log("Connection to the database: DONE!");
  fs.createReadStream("./" + csv)
    .pipe(parse({ delimiter: ",", from_line: 2 }))
    .on("data", function (row) {
      console.log(row);
    })
    .on("end", function () {
      console.log("All data has been read with no errors");
    })
    .on("error", function (error) {
      console.error(error.message);
    });
  //dbClient.end();
});

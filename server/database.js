const mysql = require("promise-mysql");
// const key = require("./key");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "users",
});

pool.getConnection().then((connection) => {
  pool.releaseConnection(connection);
  console.log("DB is connected");
});

module.exports = pool;

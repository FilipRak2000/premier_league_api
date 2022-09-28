require('dotenv').config()
const Pool = require("pg").Pool


const pool = new Pool({
    user:  "postgres",
    password: "test",
    database: "premier_league",
    host: "localhost",
    port: 5432
});

module.exports = pool;
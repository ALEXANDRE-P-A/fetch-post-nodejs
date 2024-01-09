const { promisify } = require("util");
const path = require("path");
const { sql } = require("@garafu/mysql-fileloader")({ root: path.join(__dirname, "./sql") });
const pool = require("./pool.js");

const MySQLClient = {
  executeQuery: async (query, values) => {
    let result = await pool.executeQuery(query, values);
    return result;
  },
};

module.exports = {
  MySQLClient,
  sql
};
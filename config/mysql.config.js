require("dotenv").config();

module.exports = {
  HOST: process.env.MYSQL_HOST || "127.0.0.1",
  PORT: process.env.MYSQL_PORT || "3306",
  USERNAME: process.env.MYSQL_USERNAME || "alexandre",
  PASSWORD: process.env.MYSQL_PASSWORD || "safada_42",
  DATABASE: process.env.MYSQL_DATABASE || "fetch_post_training"
};

/*
  CREATE TABLE IF NOT EXISTS example (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(256) NOT NULL,
    age INT(11) NOT NULL,
    celular VARCHAR(256),
    carrier VARCHAR(256)
  );
*/
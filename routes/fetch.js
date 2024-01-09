const router = require("express").Router();
const { MySQLClient, sql } = require("../lib/database/client.js");

router.post("/", async (req, res, next) => {
  const { name, age, address, celular, carrier } = req.body;
  let data;

  try {
    await MySQLClient.connect();
    data = await MySQLClient.query(await sql("INSERT_DATA"),
      [name, age, address, celular, carrier]
    );
    console.log(data);
  } catch(err) {
    next(err);
  } finally {
    await MySQLClient.end();
  }

  return
});

module.exports = router;

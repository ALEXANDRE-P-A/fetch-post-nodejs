const router = require("express").Router();
const { MySQLClient, sql } = require("../lib/database/client.js");

router.post("/", async (req, res, next) => {
  const { name, age, address, celular, carrier } = req.body;
  let data;

  try {
    data = await MySQLClient.executeQuery(
      await sql("INSERT_DATA"),
      [name, age, address, celular, carrier]
    );
  } catch(err) {
    next(err);
  }

  return
});

module.exports = router;

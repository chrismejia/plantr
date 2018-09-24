const { db } = require("./models");

// {force: true} will drop tables before every sync
db.sync({ force: true })
  .then(data => console.log("All synced up!"))
  .catch(err => console.error("No dice Bryce", err))
  .finally(data => db.close());

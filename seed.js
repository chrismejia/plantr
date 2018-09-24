const { db } = require('./models');
 
    db.sync({force: true})
    .then((data => console.log('All synced up!')))
    .catch(err =>
    console.log('No dice Bryce'))
    .finally((data => db.close()))


const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/plantr', {
    logging: false
});

const Gardener = db.define('gardeners', {
    name: {
        type: Sequelize.STRING,
        // validation: {
            // allowNull: false
    },
    age: {
        type: Sequelize.INTEGER,
        // validation: { 
        //  allowNull: false   
        }
    }
}

module.exports = { db };
const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/plantr", {
  logging: false
});

// ### DB Definitions ###
// Defining our tables, column names and corresponding data types
const Gardener = db.define("gardeners", {
  name: Sequelize.STRING,
  age: Sequelize.INTEGER
});

const Plot = db.define("plots", {
  size: Sequelize.INTEGER,
  shaded: Sequelize.BOOLEAN
});

const Vegetable = db.define("vegetables", {
  name: Sequelize.STRING,
  color: Sequelize.STRING,
  planted_on: Sequelize.DATE
});

// ### DB Relationships ###
// Plot belongs to Gardener...
Plot.belongsTo(Gardener);

//...and a Gardener has one Plot.
Gardener.hasOne(Plot);

// Vegetables belongs to many plots.
// Note 1. EVERY time you create a .belongsToMany relationship, you must specify an extra object containing a 'through' value that specifies the name to join table that contains the foreign keys.

// A plot has many Vegetables; L36 & 37 defines the many-to-many relationship they have with each other. These two tables are connected { 'through' vegetable_plot }.
//                         Note 1 ↴
Vegetable.belongsToMany(Plot, { through: "vegetable_plot" });
Plot.belongsToMany(Vegetable, { through: "vegetable_plot" });

// This is handled on line 37 already!
// Plot.hasMany(Vegetable);

// A Gardener has a favorite vegetable.
// Note 2: 'as' is just a universal alias

// L46 is the one that breaks everything!? -- Nope, was L40; see notes on L34 & 39
//                       Note 2 ↴
Gardener.belongsTo(Vegetable, { as: "favorite_vegetable" });

// ### Section ###

// ### Exporting DB connection and DB tables ###
module.exports = { db, Plot, Gardener, Vegetable };

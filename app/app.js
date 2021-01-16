const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//INISIALISASI DATABASE
//const db = require("./app/models");
//db.sequelize.sync();
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//ROUTING

app.use("/api/coa/", require("./routes/coa.routes"));
app.use("/api/", require("./routes/general.routes"));

//The 404 Route (ALWAYS Keep this as the last route)
app.get("*", function (req, res) {
  res.status(404).send({
    code: 404,
    status: false,
    error: "Not Found",
  });
});

module.exports = app;

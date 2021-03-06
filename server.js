

const express = require("express");
const cors = require("cors");
const app = express();
const clientRoute = require('./app/routes/client.route.js')

const commandeRoute = require('./app/routes/commande.route.js')
const restaurantRoute = require('./app/routes/restaurant.route.js')


var corsOptions = {
  origin: "*"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

app.use('/client',clientRoute)
app.use('/commande',commandeRoute)
app.use('/restaurant',restaurantRoute)


// simple route
app.get("/", (req, res) => {
  res.json({ message: "welcome to my project." });
});
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
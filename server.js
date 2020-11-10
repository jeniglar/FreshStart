require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const routes = require("./routes");



const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;

// MongoDB connection
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }).then (() => console.log("Connected to database."))
.catch(err => console.log(err));

// Passport
app.use(passport.initialize());
require("./config/passport")(passport);

//Routes
app.use(routes);


app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`)
})



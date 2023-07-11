const session = require('express-session');
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const authRoute = require("./routes/auth");
const passportSetup = require('./passport');


const app = express();

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000, // Adjust the session duration as needed
    },
  }));
  

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
}));

app.use("/auth", authRoute);

app.listen("5000", () => {
    console.log("Server is running on port 5000")
});
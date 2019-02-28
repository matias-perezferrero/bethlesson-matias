require("dotenv").config();
const express = require("express"),
  session = require("express-session"),
  massive = require("massive"),
  ctrl = require("./controllers/controller");

const app = express(),
  { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

app.use(express.json());
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 123123123
    }
  })
);

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("Database connected");

  app.listen(SERVER_PORT, () => {
    console.log(`10-4 on ${SERVER_PORT}`);
  });
});

app.post("/auth/register", ctrl.register);
app.post("/auth/login", ctrl.login);
app.get("/api/current", ctrl.getUser);
app.post("/auth/logout", ctrl.logout);

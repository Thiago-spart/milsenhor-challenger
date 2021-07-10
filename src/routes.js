const express = require("express");

const routes = express.Router();

const User = require("./controllers/users.controller");

routes.get("/", User.index);

routes.post("/api/users", User.create);
routes.get("/api/users", User.index);
routes.post("/api/users/login", User.login);
routes.get("/api/users/checktoken", User.checkToken);
routes.get("/api/users/destroytoken", User.destroyToken);

module.exports = routes;

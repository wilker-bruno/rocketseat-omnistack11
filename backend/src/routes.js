const express = require("express");

const OngController = require("./controllers/OngController");
const SessionController = require("./controllers/SessionController");
const ProfileController = require("./controllers/ProfileController");
const IncidentController = require("./controllers/IncidentController");

const routes = express.Router();

routes.post("/sessions", SessionController.create);

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

routes.get("/profile", ProfileController.index);

routes.get("/incidents", IncidentController.index);
routes.post("/incidents", IncidentController.create);
routes.delete("/incidents/:id", IncidentController.delete);

module.exports = routes;

/**
 * Tipos de Parâmetros
 * Query (req.query), parâmetros nomeados e enviados na rota após "?" (Filtros, Paginação)
 * Route Params (req.params), parâmetros utilizados para identificar recursos ":"
 * Request Body (req.body), corpo da requisição, utilizado para criar ou alterar recursos
 */

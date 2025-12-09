const express = require("express");
const routes = express.Router();

const auth = require("../middlewares/usuarioAuth");
const carroController = require("../controllers/CarroController");

routes.get("/carros", auth, carroController.relatorio);
routes.get("/carros/cadastrar", auth, carroController.cadastrarGet);
routes.get("/carros/remover/:id", auth, carroController.remover);
routes.get("/carros/atualizar/:id", auth, carroController.atualizarGet);
routes.get("/carros/:id", auth, carroController.detalhar);

routes.post("/carros", auth, carroController.cadastrarPost);
routes.post("/carros/atualizar", auth, carroController.atualizarPost);


module.exports = routes;
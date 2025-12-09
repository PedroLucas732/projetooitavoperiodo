const express = require("express");
const routes = express.Router();

const auth = require("../middlewares/usuarioAuth");
const auxiliarController = require("../controllers/auxiliarController");

routes.get("/auxiliares", auth, auxiliarController.relatorio);
routes.get("/auxiliares/cadastrar", auth, auxiliarController.cadastrarGet);
routes.get("/auxiliares/remover/:id", auth, auxiliarController.remover);
routes.get("/auxiliares/atualizar/:id", auth, auxiliarController.atualizarGet);
routes.get("/auxiliares/:id", auth, auxiliarController.detalhar);

routes.post("/auxiliares", auth, auxiliarController.cadastrarPost);
routes.post("/auxiliares/atualizar", auth, auxiliarController.atualizarPost);


module.exports = routes;
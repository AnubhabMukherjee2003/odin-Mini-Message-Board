const { Router } = require("express");
const {redirectIndex,getMessagebyId} = require("../controllers/msgController");

const msgRouter = Router();
msgRouter.get("/", redirectIndex);
msgRouter.get("/:id", getMessagebyId);

module.exports = msgRouter;

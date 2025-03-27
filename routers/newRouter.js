const { Router } = require("express");
const {getForm,postMessage} = require("../controllers/newController");

const newRouter = Router();
newRouter.get("/", getForm);
newRouter.post("/", postMessage);

module.exports = newRouter;

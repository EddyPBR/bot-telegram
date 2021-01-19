import express from "express";

import HelloController from "./controllers/HelloController";

const helloController = new HelloController();

const routes = express.Router();

routes.get("/", helloController.index);

export default routes;
import express from "express";

import PurchaseController from "./controllers/PurchaseController";

const purchaseController = new PurchaseController();

const routes = express.Router();

routes.get("/:client_name", purchaseController.search);
routes.post("/", purchaseController.create);

export default routes;

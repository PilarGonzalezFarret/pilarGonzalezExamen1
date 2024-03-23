import express from "express";
import * as piratesCtrl from "../controllers/pirates.controller.js";

const pirateRouter = express.Router();

//Creo las rutas
pirateRouter.post("/api/pirates/new", piratesCtrl.createPirate);
pirateRouter.get("/api/pirates/get", piratesCtrl.getAllPirates);
pirateRouter.get("/api/pirates/get/:piratesId", piratesCtrl.getPiratesById);
pirateRouter.put("/api/pirates/update/:piratesId", piratesCtrl.updatePirate);
pirateRouter.delete("/api/pirates/delete/:piratesId", piratesCtrl.deletePirate);

export {pirateRouter};
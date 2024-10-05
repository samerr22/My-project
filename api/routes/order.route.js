import express from "express";
import { create,  deletedata, getAll,update} from "../controllers/record.controller.js";




const route = express.Router();

route.post("/create", create);
route.get("/getall", getAll);
route.put( '/updatee/:EId', update);
route.delete( '/delete/:EEEId', deletedata);






export default route;
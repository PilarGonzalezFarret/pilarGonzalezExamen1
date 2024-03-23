import express from "express"; 
import mongoose from "mongoose"; 
import cors from "cors";
import * as pirateRoutes from "./routes/pirates.routes.js"; 

const app = express(); 

//Habilitar dependencias
app.use(cors()); // Habilitamos el acceso a la API desde cualquier origen
app.use(express.json()); // Habilitamos el uso de JSON en la API
app.use(pirateRoutes.pirate); // Habilitamos las rutas de la API
app.listen(8000); // Levantamos el servidor en el puerto 8000


//Conexión a la base de datos
mongoose.connect("mongodb://localhost:27017/piratesdb")
.then(()=>console.log("Conexion Correcta:[ puerto 8000 ]"))
.catch((e)=>console.log("Error" + e));

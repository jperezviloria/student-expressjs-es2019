import express, {json} from "express"
import morgan from "morgan";
import StudentRoutes from "./routes/student.routes"

//initializations
const app = express();

//middlewares
app.use(morgan("dev"))
app.use(json())

//routes
app.use("/student", StudentRoutes)



export default app;
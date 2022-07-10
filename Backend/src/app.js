import express from "express"
import db from "./config/dbConnect.js"
import routes from "./routes/index.js"
import cors from "cors"

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
    console.log("Conectado ao MongoDB")
})

const app = express();

app.use(express.json())

app.use(cors())

routes(app);

export default app



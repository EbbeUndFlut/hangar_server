import express from "express"
import './config.js'
import { getFlugzeug, addFlugzeug } from "./controller/flugzeugController.js"


//packages
import cors from "cors";

const PORT = 9090
const app = express()

//middleware
app.use(cors({origin: "http://localhost:3000"}));

app.listen(PORT, () => console.log("huhu", PORT))
app.use(express.json())
app.get('/', (req, res) => {
    res.status(200).send('Hello there!')
})

app.get('/planes', getFlugzeug)

app.post('/planes', addFlugzeug)
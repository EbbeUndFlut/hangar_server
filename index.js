import express from "express"

const PORT = 9090
const app = express()

app.listen(PORT, () => console.log("huhu", PORT))

app.get('/', (req, res) => {
    res.status(200).send('Hello there!')
})
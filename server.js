import express, { json } from 'express'

const app = express()



app.use(json())
app.get("/", (req, res) => {
    res.send({ name: "givi", surname: "gocha" })
})


app.listen(8080, () => {
    console.log("server is listening")
})
const { json } = require('express')
const express = require('express')
const teamsRoutes = require("./routes")
const app = express()

app.use(express.json())


app.get("/", (req, res) =>{
    res.send("Premier League API")
})

app.use("/api/teams", teamsRoutes)




app.listen(3000)
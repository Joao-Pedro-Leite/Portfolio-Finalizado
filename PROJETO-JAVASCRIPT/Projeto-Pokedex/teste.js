const express = require("express")
const bodyParser = require("body-parser")
const app = express()


app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}))





app.get("/", async function (req, res) {
    
    
    

    
    
    res.sendFile(__dirname+"/index.html")
})






app.listen(3000, function () {
    console.log("Seu servidor está na porta 3000")
})

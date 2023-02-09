const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

var addListaS = [];
let itemTarefa = [];

const app = express();


app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))

app.set("view engine", "ejs")




app.get("/", function (req, res) {
    
    let day = date.getDay()
    res.render("list", {tituloLista: day, novoItem: addListaS});

})

app.post("/", function (req, res) {
    
    console.log(req.body)
    let item = req.body.addlista

    if(req.body.button === "Lista de Tarefas"){
        itemTarefa.push(item)
        res.redirect("/work")
    }else { 
        addListaS.push(item)
        res.redirect("/")
    }
})

app.get("/work", function(req, res){
    res.render("list", {tituloLista: "Lista de Tarefas", novoItem: itemTarefa})
})

app.get("/about", function (req, res) {
    res.render("about")
})

app.listen(3000, function () {
    console.log("Server está na porta 3000")
})


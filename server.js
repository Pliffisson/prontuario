const express = require("express")
const nunjucks = require("nunjucks")
const patients = require("./data")

const server = express()

server.set("view engine", "njk")
server.use(express.static("public"))

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function (req, res){
    return res.render("index")
})

server.get("/create-patient", function (req, res){
    return res.render("create-patient")
})

server.get("/create-procedure", function (req, res){
    return res.render("create-procedure")
})

server.get("/search-result", function (req, res){
    return res.render("search-result", { patients })
})

server.get("/patient/:id", function (req, res){
    const id = req.params.id

    const patient = patients.find(function(patient){
        return patient.id == id
    })

    if(!patient) {
        return res.send("Paciente não encontrado!")
    }

    return res.render("patient", { patient })
})

server.listen(3000, () =>{
    console.log("server funcionando")
})
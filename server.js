const express = require("express")
const nunjucks = require("nunjucks")

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
    return res.render("search-result")
})

server.get("/patient", function (req, res){
    return res.render("patient")
})

server.listen(3000, () =>{
    console.log("server funcionando")
})
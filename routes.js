const express = require('express')
const patients = require('./data')

const routes = express.Router()

routes.get("/", function (req, res){
    return res.render("index")
})

routes.get("/create-patient", function (req, res){
    return res.render("create-patient")
})

routes.get("/create-procedure", function (req, res){
    return res.render("create-procedure")
})

routes.get("/search-result", function (req, res){
    return res.render("search-result", { patients })
})

routes.get("/patient/:id", function (req, res){
    const id = req.params.id

    const patient = patients.find(function(patient){
        return patient.id == id
    })

    if(!patient) {
        return res.send("Paciente não encontrado!")
    }

    return res.render("patient", { patient })
})

module.exports = routes;
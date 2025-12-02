const express = require('express');
const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

const session = require("express-session");
app.use(session({
    secret: 'ifpe',
    saveUninitialized: false,
    resave: false
}));

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://plsc1:qsjmPtfOiQZwuk9f@cluster0.q6gsfni.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

const alunoRoutes = require("./routes/alunoRoutes");
const usuarioRoutes = require("./routes/usuarioRoutes");
app.use(alunoRoutes);
app.use(usuarioRoutes);

app.get("/", function(req, res){
    if(req.session.usuario){
        res.render("index");
    }else{
        res.redirect("/usuarios/login");
    }
});


app.use(function(req, res){
    res.status(404).render("404");
});

app.listen("999", function(){
    console.log("Rodando");
});
const Carro = require("../models/Carro");

class CarroController {

    static async relatorio(req, res){
        const status = req.query.s;
        const carros = await Carro.find();
        res.render("carro/relatorio", { carros, status });
    }

    static async cadastrarPost(req, res){
        const carro = req.body;
        const novoCarro = new Carro({
            marca: carro.marca,
            modelo: carro.modelo,
            placa: carro.placa
        });
        await novoCarro.save();
        res.redirect("/carros?s=1");
    }

    static cadastrarGet(req, res){
        const carro = {};
        res.render("carro/cadastrar", { carro });
    }

    static async detalhar(req, res){
        const carro = await Carro.findOne({ _id: req.params.id });
        res.render("carro/detalhar", { carro });
    }

    static async remover(req, res){
        await Carro.deleteOne({ _id: req.params.id });
        res.redirect("/carros?s=2");
    }

    static async atualizarGet(req, res){
        const carro = await Carro.findOne({ _id: req.params.id });
        res.render("carro/cadastrar", { carro });
    }

    static async atualizarPost(req, res){
        const carro = req.body;
        await Carro.updateOne(
            { _id: carro.id },
            {
                marca: carro.marca,
                modelo: carro.modelo,
                placa: carro.placa
            }
        );
        res.redirect("/carros?s=3");
    }

}

module.exports = CarroController;

const Auxiliar = require("../models/Auxiliar");

class AuxiliarController {

    static async relatorio(req, res){
        const status = req.query.s;
        const auxiliares = await Auxiliar.find();
        res.render("auxiliar/relatorio", { auxiliares, status });
    }

    static async cadastrarPost(req, res){
        const aux = req.body;
        const novoAux = new Auxiliar({
            cod: aux.cod,
            nome: aux.nome,
            setor: aux.setor
        });
        await novoAux.save();
        res.redirect("/auxiliares?s=1");
    }

    static cadastrarGet(req, res){
        const auxiliar = {};
        res.render("auxiliar/cadastrar", { auxiliar });
    }

    static async detalhar(req, res){
        const auxiliar = await Auxiliar.findOne({ _id: req.params.id });
        res.render("auxiliar/detalhar", { auxiliar });
    }

    static async remover(req, res){
        await Auxiliar.deleteOne({ _id: req.params.id });
        res.redirect("/auxiliares?s=2");
    }

    static async atualizarGet(req, res){
        const auxiliar = await Auxiliar.findOne({ _id: req.params.id });
        res.render("auxiliar/cadastrar", { auxiliar });
    }

    static async atualizarPost(req, res){
        const aux = req.body;
        await Auxiliar.updateOne(
            { _id: aux.id },
            {
                cod: aux.cod,
                nome: aux.nome,
                setor: aux.setor
            }
        );
        res.redirect("/auxiliares?s=3");
    }

}

module.exports = AuxiliarController;

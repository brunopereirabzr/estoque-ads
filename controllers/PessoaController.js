import Pessoa from "../models/Pessoa.js";

class PessoaController{
    index = async function(req, res){ // acao index é uma acao que busca todos os elementos de pessoa e acao tem que ser async
        let pessoas = await Pessoa.findAll() // await é para o java script esperar a acao buscar todas as pessoas || Pessoa.findAll() cria um lista encadeaada de pessoas do banco
        res.render('pessoa/index', {pessoas: pessoas}) // envia as pessoas para a visao
    }
}

export default new PessoaController();
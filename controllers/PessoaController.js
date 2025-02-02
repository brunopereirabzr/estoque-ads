import Pessoa from "../models/Pessoa.js";

class PessoaController{
    index = async function(req, res){ // acao index é uma acao que busca todos os elementos de pessoa e acao tem que ser async
        let pessoas = await Pessoa.findAll() // await é para o java script esperar a acao buscar todas as pessoas || Pessoa.findAll() cria um lista encadeaada de pessoas do banco
        res.render('pessoa/index', {pessoas: pessoas}) // envia as pessoas para a visao
    }

    cadastro = function(req,res){
        res.render('pessoa/cadastro')
    }

    salvar = function(req, res){

        let pessoa = {
            
            nome:req.body.nome,
            telefone:req.body.telefone,
            email:req.body.email,
            cpf:req.body.cpf,
            status:1
        }
        //Cria linha no banco de dados
        Pessoa.create(pessoa).then(function(){
            res.redirect('/pessoa')
        })
    }
}

export default new PessoaController();
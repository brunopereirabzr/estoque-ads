import { where } from "sequelize";
import Pessoa from "../models/Pessoa.js";
import Usuario from "../models/Usuario.js";

class PessoaController{
    index = async function(req, res){ // acao index é uma acao que busca todos os elementos de pessoa e acao tem que ser async
        let pessoas = await Pessoa.findAll() // await é para o java script esperar a acao buscar todas as pessoas || Pessoa.findAll() cria um lista encadeaada de pessoas do banco
        res.render('pessoa/index', {pessoas: pessoas}) // envia as pessoas para a visao
    }
    perfil = async function(req, res) {
        let id = req.params.id;
        let pessoa = await Pessoa.findByPk(id);
        let usuarios = await Usuario.findAll({
            where{
                pessoa_id:id
            }
        })
        res.render('pessoa/perfil', 
        {
            pessoa: pessoa,
            usuarios: usuarios
        });
    }

    cadastrar = function(req,res){
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
        //Faz a conexão com o banco de dados e só controlador pode chamar ela
        Pessoa.create(pessoa).then(function(){
            res.redirect('/pessoa')
        })
    }

    
}

export default new PessoaController();
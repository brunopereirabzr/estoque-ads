import Produto from "../models/Produto.js"

class ProdutoController{
   
    index = async function(req, res){
        const produtos = await Produto.findAll()
        req.flash('success_msg', 'produto listados!')
        res.render('produto/index', {produtos: produtos})
    }



    cadastrar = function(req,res){
        res.render('produto/cadastrar')
    }

    //pega o que é informado do formulario
    salvar = function(req, res){

        let produto = {
            
            descricao:req.body.descricao,
            preco:req.body.preco,
            estoque:req.body.estoque,
            status:1
        }
        //Cria linha no banco de dados
        Produto.create(produto).then(function(){
            res.redirect('/produto')
        })
    }

}//fim da classe

export default new ProdutoController()
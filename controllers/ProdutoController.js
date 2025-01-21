class ProdutoController{

    lista = function(req, res){
        res.render('produto/lista');
    }

}//Fim da class

export default new ProdutoController()
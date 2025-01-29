import Usuario from '../models/Usuario.js';

class UsuarioController{

    //abrir o formulario
    cadastrar = function(req,res){
        res.render('usuario/cadastro');
    }

    

}

export default new UsuarioController();


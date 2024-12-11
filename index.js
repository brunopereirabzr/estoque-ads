import express from 'express';
const app = express();
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import handlebars from 'express-handlebars';
import Handlebars from 'handlebars';
import { allowInsecurePrototypeAccess } from '@handlebars/allow-prototype-access';
const porta = 3000;

//CONFIGURAÇÃO DA PASTA ESTATICA
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/*CONFIGURAÇÃO DA VISÃO*/
app.engine('handlebars',handlebars.engine({
    defaultLayout: 'principal', 
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}))
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname,'public')));

/*ROTAS DO SISTEMA*/
app.get('/', function(req, res){
    var aluno = {
        nome: "Bruno",
        nota: 8.5
    };
    res.render('admin/index', {aluno});
})

app.get('/contato', function(req, res){
    res.render('admin/contato');
})

app.listen(porta, function(){
    console.log('Servidor truando em http://localhost:'+porta);
});
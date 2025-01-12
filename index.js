import express from 'express';
const app = express();
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import handlebars from 'express-handlebars';
import Handlebars from 'handlebars';
import bodyParser from 'body-parser';
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

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

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

app.get('/cadastro', function(req, res){
    res.render('produto/cadastro');
})

app.post('/cadastro', function(req, res){
    var produto = {
        descricao: req.body.descricao,
        preco: req.body.preco,
        estoque: req.body.estoque,
        status: 1,
        foto:'/img/semfoto.png'
    }
    res.render('produto/detalhe',{produto});
})


//hahahahahahahhahahahahahah
app.listen(porta, function(){
    console.log('Servidor truando em http://localhost:'+porta);
});
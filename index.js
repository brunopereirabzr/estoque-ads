import express from 'express';
import handlebars from 'express-handlebars';
const app = express();

import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

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

//Rota inicio
app.get('/', function(req, res){
    res.render('admin/index');
})

app.get('/contato', function(req, res){
    res.render('admin/contato');
})

app.get('/cadastro', function(req, res){
    res.render('produto/cadastro');
})

app.get('/produto', function(req, res){
    const produtos = [
        {
            id: 1,
            descricao: 'mouse',
            preco: 25.99,
            estoque: 10
        },
        {
            id: 2,
            descricao: 'teclado',
            preco: 35.99,
            estoque: 5
        }
    ]
    res.render('produto/lista', {produtos: produtos});
})

app.post('/cadastro', function(req, res){
    var produto = {
        descricao: req.body.descricao,
        preco: req.body.preco,
        estoque: req.body.estoque,
        status: 1,
        foto:'/img/semfoto.png'
    }
    res.render('produto/lista',{produto});
})


app.listen(porta, function(){
    console.log('Servidor truando em http://localhost:' + porta);
});
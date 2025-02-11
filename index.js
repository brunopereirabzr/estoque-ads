import express from 'express';
import Handlebars from 'handlebars';
import handlebars from 'express-handlebars';
import session from 'express-session';
import flash from 'connect-flash';
const app = express();
const porta = 8000;

//configuracao de sessao
app.use(session({
    secret: 'institutofederaldomaranhao',
    resave: true,
    saveUninitialized: false
}))
app.use(flash())//permite configurar mensagem --> tem que ser abaixo da sessao

app.use(function(req, res, next){ //
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    next()
})



import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

//CONFIGURAÇÃO DA PASTA ESTATICA
const __filename = fileURLToPath(import.meta.url); // Obtem o nome do arquivo atual
const __dirname = path.dirname(__filename); // Obtem o diretorio do arquivo atual



import bodyParser from 'body-parser';

//colocar isso aqui para poder rodar os dados enviados do banco de dados
// instale isso no cmd @handlebars/allow-prototype-access --> npm install @handlebars/allow-prototype-access
import { allowInsecurePrototypeAccess } from '@handlebars/allow-prototype-access';



/*CONFIGURAÇÃO DA VISÃO*/ // Define o layout padrão para todas as páginas
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

import produto from './routes/produto.js';
app.use('/produto', produto);

import pessoa from './routes/pessoa.js';
app.use('/pessoa', pessoa);

import usuario from './routes/usuario.js';
app.use('/usuario', usuario);

app.listen(porta, function(){
    console.log('Servidor truando em http://localhost:' + porta);
});
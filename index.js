import express from 'express';
import handlebars from 'express-handlebars';
const app = express();
const porta = 8000;

import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

import Handlebars from 'handlebars';
import bodyParser from 'body-parser';

//colocar isso aqui para poder rodar os dados enviados do banco de dados
// instale isso no cmd @handlebars/allow-prototype-access --> npm install @handlebars/allow-prototype-access
import { allowInsecurePrototypeAccess } from '@handlebars/allow-prototype-access';


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

import produto from './routes/produto.js';
app.use('/produto', produto);

import pessoa from './routes/pessoa.js';
app.use('/pessoa', pessoa)

app.listen(porta, function(){
    console.log('Servidor truando em http://localhost:' + porta);
});
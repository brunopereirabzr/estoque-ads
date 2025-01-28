import express from 'express';
const router = express.Router();
import PessoaController from '../controllers/PessoaController.js';

router.get('/', PessoaController.index);
router.get('/cadastrar', PessoaController.cadastrar);
router.post('/salvar', PessoaController.salvar);

export default router;
import express from 'express';
const router = express.Router();
import Usuario from '../controllers/UsuarioController.js';
import UsuarioController from '../controllers/UsuarioController.js';

router.get('/cadastro', UsuarioController.cadastrar);
router.post('/salvar', UsuarioController.salvar);

export default router;
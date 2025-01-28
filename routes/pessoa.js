import express from 'express';
const router = express.Router();
import PessoaController from '../controllers/PessoaController.js';

router.get('/', PessoaController.index);

export default router;
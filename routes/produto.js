import express from 'express';
const router = express.Router();

import ProdutoController from '../controllers/ProdutoController.js';

router.get('/lista', ProdutoController.lista);

export default router
import {Router} from 'express';
import { getNoticias, getNoticia, nuevaNoticia, actualizarNoticia, login } from '../controllers/noticias';

const router = Router();

router.get('/', getNoticias);
router.get('/:id', getNoticia);
router.post('/', nuevaNoticia);
router.post('/actualizarnoticia/:id', actualizarNoticia);
router.post('/login', login);

export default router;
import {Router} from 'express';
import { getNoticias, getNoticia, nuevaNoticia, actualizarNoticia, login, findNoticiaText } from '../controllers/noticias';
import { ConnectSoffidPaso1, AuthSoffid, Token } from '../controllers/soffid-controllers';

const router = Router();

router.get('/', ConnectSoffidPaso1);
router.post('/auth', AuthSoffid);
router.post('/token', Token);


export default router;
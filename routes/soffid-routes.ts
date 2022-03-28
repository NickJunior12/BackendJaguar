import {Router} from 'express';
import { getNoticias, getNoticia, nuevaNoticia, actualizarNoticia, login, findNoticiaText } from '../controllers/noticias';
import { ConnectSoffidPaso1 } from '../controllers/soffid-controllers';

const router = Router();

router.get('/', ConnectSoffidPaso1);


export default router;
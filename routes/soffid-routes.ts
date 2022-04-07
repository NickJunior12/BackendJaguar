import {Router} from 'express';
import { ConnectSoffidPaso1, AuthSoffid, Token, UserInfo } from '../controllers/soffid-controllers';

const router = Router();

router.get('/', ConnectSoffidPaso1);
router.post('/auth', AuthSoffid);
router.post('/token', Token);
router.post('/userinfo', UserInfo);


export default router;
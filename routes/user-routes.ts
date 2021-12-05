import {Router} from 'express';
import { login, getUsers } from '../controllers/user-controler';

const router = Router();

router.get('/', getUsers);

export default router;
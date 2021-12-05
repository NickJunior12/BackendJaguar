import {Router} from 'express';
import { uploadNoticia, uploadBanner, getBanners } from '../controllers/uploads-controller';

const router = Router();

router.post('/noticia/:id', uploadNoticia);
router.post('/banner', uploadBanner);
router.get('/get-banners', getBanners);

export default router;
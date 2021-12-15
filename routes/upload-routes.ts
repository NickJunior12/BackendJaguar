import {Router} from 'express';
import { uploadNoticia, uploadBanner, getBanners, borrarBanners } from '../controllers/uploads-controller';

const router = Router();

router.post('/noticia/:id', uploadNoticia);
router.post('/banner', uploadBanner);
router.get('/get-banners', getBanners);
router.post('/borrar/:id', borrarBanners)

export default router;
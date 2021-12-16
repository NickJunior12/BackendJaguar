import {Router} from 'express';
import { uploadNoticia, uploadBanner, getBanners, borrarBanners, uploadBannerCloudinary,uploadNoticiaCloudinary } from '../controllers/uploads-controller';

const router = Router();

router.post('/noticia/:id', uploadNoticiaCloudinary);
router.post('/banner', uploadBannerCloudinary);
router.get('/get-banners', getBanners);
router.post('/borrar/:id', borrarBanners)

export default router;
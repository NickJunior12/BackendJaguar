import {Router} from 'express';
import { getBeneficios, getBeneficio, nuevoBeneficio, actualizarBeneficio, findBeneficioText, borrarBeneficio } from '../controllers/beneficios';

const router = Router();

router.get('/', getBeneficios);
router.get('/:id', getBeneficio);
router.post('/', nuevoBeneficio);
router.post('/actualizarnoticia/:id', actualizarBeneficio);
router.post('/buscador', findBeneficioText);
router.delete('/:id', borrarBeneficio);

export default router;
import {Router} from 'express';
import { getBeneficios, getBeneficio, nuevoBeneficio, actualizarBeneficio, findBeneficioText, borrarBeneficio, getDocumentos, nuevoDocumento, actualizarDocumento, borrarDocumento } from '../controllers/beneficios';

const router = Router();

router.get('/', getBeneficios);
router.get('/:id', getBeneficio);
router.post('/', nuevoBeneficio);
router.post('/actualizarBeneficio/:id', actualizarBeneficio);
router.post('/buscador', findBeneficioText);
router.delete('/:id', borrarBeneficio);
router.get('/documentos/:id', getDocumentos);
router.post('documentos', nuevoDocumento);
router.post('/documentos/update/:id', actualizarDocumento);
router.delete('/documentos/borrado/:id', borrarDocumento);

export default router;
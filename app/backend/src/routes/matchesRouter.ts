import { Router } from 'express';
import matchesController from '../controllers/matchesController';
import validateToken from '../middelware/validateToken';

const router = Router();

router.get('/', matchesController.matches);
router.post('/', validateToken.validateT, matchesController.saveMt);
router.patch('/:id/finish', matchesController.matchesId);

export default router;

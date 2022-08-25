import { Router } from 'express';
import matchesController from '../controllers/matchesController';

const router = Router();

router.get('/', matchesController.matches);
// router.get('/:id', matchesController.matchesId);

export default router;

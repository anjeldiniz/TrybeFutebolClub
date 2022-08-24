import { Router } from 'express';
import teamsController from '../controllers/teamsController';

const router = Router();

router.get('/', teamsController.teams);
router.get('/:id', teamsController.teamsId);

export default router;

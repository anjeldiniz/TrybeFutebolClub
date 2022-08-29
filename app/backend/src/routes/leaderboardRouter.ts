import { Router } from 'express';
import leaderboardController from '../controllers/leaderboardController';

const router = Router();

router.get('/home', leaderboardController.leaderboard);

export default router;

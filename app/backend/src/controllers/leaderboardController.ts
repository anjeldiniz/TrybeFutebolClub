import { Request, Response } from 'express';
import findLeader from '../services/leaderboardService';

export default class leaderboardController {
  static leaderboard = async (req: Request, res: Response) => {
    const leaderboardAll = await findLeader();
    res.status(200).json(leaderboardAll);
  };
}

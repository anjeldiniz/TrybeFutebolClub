import { Request, Response } from 'express';
import teamsService from '../services/teamsService';

export default class TeamsController {
  static teams = async (req: Request, res: Response) => {
    const teamsAll = await teamsService.findTeams();
    res.status(200).json(teamsAll);
  };
}

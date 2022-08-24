import { Request, Response } from 'express';
import teamsService from '../services/teamsService';

export default class TeamsController {
  static teams = async (req: Request, res: Response) => {
    const teamsAll = await teamsService.findTeams();
    res.status(200).json(teamsAll);
  };

  static teamsId = async (req: Request, res: Response) => {
    const { id } = req.params;
    const teams = await teamsService.findById(id);
    res.status(200).json(teams);
  };
}

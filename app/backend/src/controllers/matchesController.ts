import { Request, Response } from 'express';
import matchesService from '../services/matchesService';

export default class MatchesController {
  static matches = async (req: Request, res: Response) => {
    const matchesAll = await matchesService.findMatches();
    res.status(200).json(matchesAll);
  };

  static addMt = async (req: Request, res: Response) => {
    await matchesService.noSameTeam(req.body);
    const addMatches = await matchesService.addMatch(req.body);
    res.status(201).json(addMatches);
  };

  static matchesIdF = async (req: Request, res: Response) => {
    const { id } = req.params;
    await matchesService.findByIdF(Number(id));
    res.status(200).json({ message: 'Finished' });
  };

  static matchesId = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    await matchesService.findById(Number(id), homeTeamGoals, awayTeamGoals);
    res.status(200).json({ message: 'ok' });
  };
}

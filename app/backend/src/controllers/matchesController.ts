import { Request, Response } from 'express';
import matchesService from '../services/matchesService';

export default class MatchesController {
  static matches = async (req: Request, res: Response) => {
    const matchesAll = await matchesService.findMatches();
    res.status(200).json(matchesAll);
  };

  static saveMt = async (req: Request, res: Response) => {
    const saveMatches = await matchesService.saveMatch(req.body);
    res.status(201).json(saveMatches);
  };

  // static matchesId = async (req: Request, res: Response) => {
  //   const { id } = req.params;
  //   const matches = await matchesService.findById(id);
  //   res.status(200).json(matches);
  // };
}

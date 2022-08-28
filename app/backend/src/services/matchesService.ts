import Teams from '../database/models/teams';
import Matches from '../database/models/matches';
import { iMatches } from '../interface/iMatche';
import Unauthorized from '../error/unauthorized';
import NotFound from '../error/notFound';
import TeamsService from './teamsService';

export default class MatchesService {
  static findMatches = async () => {
    const matches = await Matches.findAll({
      include: [{
        model: Teams,
        as: 'teamHome',
        attributes: ['teamName'],
      }, {
        model: Teams,
        as: 'teamAway',
        attributes: ['teamName'],
      }],
      raw: true,
      nest: true,
    });
    return matches;
  };

  static addMatch = async (matches: object) => {
    const createMatches = await Matches.create({ ...matches, inProgress: 0 });
    return createMatches;
  };

  static findByIdF = async (id: number) => {
    await Matches.update({
      inProgress: false,
    }, {
      where: { id },
    });
    return true;
  };

  static noSameTeam = async (match: iMatches) => {
    const { homeTeam, awayTeam } = match;
    if (homeTeam === awayTeam) {
      throw new Unauthorized('It is not possible to create a match with two equal teams');
    }
    const homeTeamExist = await TeamsService.findById(homeTeam);
    const awayTeamExist = await TeamsService.findById(awayTeam);
    if (!homeTeamExist || !awayTeamExist) {
      throw new NotFound('There is no team with such id!');
    }
  };

  static findById = async (id: number,  homeTeamGoals: number,
    awayTeamGoals: number,) => {
    await Matches.update({
      homeTeamGoals,
      awayTeamGoals,
    }, {
      where: { id },
    });
    return true;
  };
}

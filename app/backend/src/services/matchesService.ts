import Teams from '../database/models/teams';
import Matches from '../database/models/matches';

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

  static saveMatch = async (matches: object) => {
    const createMatches = await Matches.create({ ...matches, inProgress: 0 });
    return createMatches;
  };

  static findById = async (id: number) => {
    await Matches.update({
      inProgress: false,
    }, {
      where: { id },
    });
    return true;
  };
}

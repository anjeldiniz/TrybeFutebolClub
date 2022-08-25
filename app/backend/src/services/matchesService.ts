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

  // static findById = async (id: string) => {
  //   const matches = await Matches.findByPk(id, {
  //     raw: true,
  //   });
  //   return matches;
  // };
}

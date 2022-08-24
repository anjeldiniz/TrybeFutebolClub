import Teams from '../database/models/teams';

export default class TeamsService {
  static findTeams = async () => {
    const teams = await Teams.findAll({
      raw: true,
    });
    return teams;
  };
}

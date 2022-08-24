import Teams from '../database/models/teams';

export default class TeamsService {
  static findTeams = async () => {
    const teams = await Teams.findAll({
      raw: true,
    });
    return teams;
  };

  static findById = async (id: string) => {
    const teams = await Teams.findByPk(id, {
      raw: true,
    });
    return teams;
  };
}

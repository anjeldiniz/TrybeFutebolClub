import { DataTypes, Model } from 'sequelize';
import db from '.';

class Matches extends Model {
  declare id: number;
  declare home_team: string;
  declare home_team_goals: string;
  declare away_team: string;
  declare away_team_goals: string;
}

Matches.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    home_team: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    home_team_goals: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    away_team: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    away_team_goals: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    in_progress: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    // ... Outras configs
    underscored: true,
    sequelize: db,
    // modelName: 'example',
    timestamps: false,
  },
);

export default Matches;
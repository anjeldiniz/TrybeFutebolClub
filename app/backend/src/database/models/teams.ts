import { DataTypes, Model } from 'sequelize';
import db from '.';

class Teams extends Model {
  declare id: number;
  declare team_name: string;
}
  
Teams.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    team_name: {
      type: DataTypes.STRING,
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

export default Teams;
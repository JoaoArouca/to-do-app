import { ITask } from './../../interfaces/index';
import { DataTypes, Model } from 'sequelize';
import db from '.';
import User from './UserModel';

export default class Task extends Model implements ITask {
  public id!: number;
  public description!: string;
  public user_id!: number;
  public status!: string;
}

Task.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    status: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    }
  },
  {
    underscored: true,
    sequelize: db,
    timestamps: false,
  },
);

Task.belongsTo(User, { foreignKey: 'id', as: 'userId' });

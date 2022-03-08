import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db';

export class Titanic extends Model {}

Titanic.init(
  {
    // Model attributes are defined here
    pass_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    room_floor: {
      type: DataTypes.INTEGER,
      // allowNull defaults to true
    },
    ticket_price: {
      type: DataTypes.INTEGER,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Titanic', // We need to choose the model name
  }
);

Titanic.sync();


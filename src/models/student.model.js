import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db';

export class Student extends Model {}

Student.init(
  {
    // Model attributes are defined here
    sroll_num: {
      type: DataTypes.INTEGER,
      //allowNull: false,
    },
    senr: {
      type: DataTypes.INTEGER,
      // allowNull defaults to true
    },
    sname: { 
        type: DataTypes.STRING,
    },
    s_mailid: {
        type: DataTypes.STRING,
    },
    sph_num: {
      type: DataTypes.INTEGER,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Student', // We need to choose the model name
  }
);

Student.sync();

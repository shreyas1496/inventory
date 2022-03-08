import { Sequelize } from 'sequelize';
const { DB_HOST, DB_USER, DB_PASSWD } = process.env;

export const sequelize = new Sequelize({
  host: DB_HOST,
  username: DB_USER,
  password: DB_PASSWD,
  dialect: 'mysql',
  database: 'test',
});

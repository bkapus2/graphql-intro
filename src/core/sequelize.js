import config from '../../config.json';
import Sequelize from 'sequelize';

const { name, username, password, host } = config.database;


const sequelize = new Sequelize(name, username, password, {
  host,
  dialect: 'postgres',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

export default sequelize;
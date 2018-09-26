import Sequelize from 'sequelize';
import sequelize from '../../core/sequelize';

const Email = sequelize.define('emails', {
  id: {
    type: Sequelize.INTEGER,
    field: 'email_id',
    primaryKey: true,
    autoIncrement: true,
  },
  candidateId: {
    type: Sequelize.INTEGER,
    field: 'candidate_id',
    underscore: true,
  },
  address: {
    type: Sequelize.STRING,
  },
  isBad: {
    type: Sequelize.BOOLEAN,
    field: 'is_bad',
    underscore: true,
  },
}, {
  timestamps: false,
});

export default Email;
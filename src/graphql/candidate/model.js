import Sequelize from 'sequelize';
import sequelize from '../../core/sequelize';
import { model as Email } from '../email';

const Candidate = sequelize.define('candidates', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'candidate_id',
  },
  name: {
    type: Sequelize.STRING,
  },
}, {
  timestamps: false,
});

Candidate.hasMany(Email, { foreignKey: 'candidate_id', sourceKey: 'emails' });

export default Candidate;
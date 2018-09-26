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

Candidate.Emails = Candidate.hasMany(Email);

export default Candidate;
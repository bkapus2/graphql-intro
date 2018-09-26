import map from 'lodash/map';
import groupBy from 'lodash/groupBy';
import DataLoader from 'dataloader';
import Email from './../model';

export default function loadEmailsByCandidateId() {
  async function load(ids) {
    const emails = await Email.findAll({ where: { candidateId: ids }});
    const groupedEmails = groupBy(emails, 'candidateId');
    return map(ids, id => groupedEmails[id] || []);
  }
  return new DataLoader(load);
}
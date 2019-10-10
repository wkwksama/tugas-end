import Incident from '../../models/incident.model';

export default {
  Query: {
    incidents: async () => {
      const incidents = await Incident.find();
      return incidents;
    },
  },
  Mutation: {
    createIncident: async (parent, { data }) => {
      const incident = await Incident.create(data);
      return incident;
    },
  },
};

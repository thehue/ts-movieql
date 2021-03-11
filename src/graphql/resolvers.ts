import { people, getById } from './db';

type Params = {
  id: number;
};

const resolvers = {
  Query: {
    people: () => people,
    person: (_: any, args: Params) => {
      const { id } = args;
      return getById(id);
    },
  },
};

export default resolvers;

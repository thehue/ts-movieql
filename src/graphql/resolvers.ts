import { getMovies, getById, addMovie } from './db';

type Params = {
  id: number;
};

type AddPrams = {
  name: string;
  audiAcc: string;
};

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_: any, args: Params) => {
      const { id } = args;
      return getById(id);
    },
  },
  Mutation: {
    addMovie: (_: any, { name, audiAcc }: AddPrams) => {
      return addMovie(name, audiAcc);
    },
  },
};

export default resolvers;

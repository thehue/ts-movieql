import { getMovies } from './db';

type Params = {
  limit?: number;
  rating?: number;
};

const resolvers = {
  Query: {
    movies: (_: any, { limit, rating }: Params) => getMovies(limit, rating),
  },
};

export default resolvers;

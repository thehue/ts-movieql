import { getMovies, getMovie, getSuggestions } from './db';

type Params = {
  limit?: number;
  rating?: number;
};

type Param = {
  id: number;
};

const resolvers = {
  Query: {
    movies: (_: any, { limit, rating }: Params) => getMovies(limit, rating),
    movie: (_: any, { id }: Param) => getMovie(id),
    suggestions: (_: any, { id }: Param) => getSuggestions(id),
  },
};

export default resolvers;

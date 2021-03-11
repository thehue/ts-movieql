export let movies = [
  {
    id: 1,
    name: '미나리',
    audiAcc: '276870',
  },
  {
    id: 2,
    name: '라야와 마지막 드래곤',
    audiAcc: '127006',
  },
  {
    id: 3,
    name: '극장판 귀멸의 칼날: 무한열차편',
    audiAcc: '1052396',
  },
  {
    id: 4,
    name: '소울',
    audiAcc: '1965137',
  },
];

export const getMovies = () => movies;

export const getById = (id: number) =>
  movies.filter((movie) => id === movie.id)[0];

export const deleteMovie = (id: number) => {
  const cleanedMovies = movies.filter((movie) => movie.id !== id);

  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name: string, audiAcc: string) => {
  let id = movies.length + 1;
  let newMovie = {
    id,
    name,
    audiAcc,
  };

  movies.push(newMovie);

  return newMovie;
};

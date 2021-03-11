import fetch from 'node-fetch';

const API_URL = 'https://yts.mx/api/v2/list_movies.json?';

//limit, rating
export const getMovies = (limit?: number, rating?: number) => {
  let REQUEST_URL = API_URL;
  if (!limit) {
    limit = 10; //default 개수
  }
  REQUEST_URL += `limit=${limit}`;

  if (rating) {
    REQUEST_URL += `&minimum_rating=${rating}`;
  }

  return fetch(`${REQUEST_URL}`)
    .then((res) => res.json())
    .then((json) => json.data.movies);
};

const findGenres = (genres, movies) =>
  genres
    .filter((genre) => movies.genre_ids.includes(genre.id))
    .map((genre) => genre.name);

export default findGenres;
import { cache } from "react";
import { db } from "./drizzle";
import { movies, shows } from "./schema";
import { eq } from "drizzle-orm";

export const getMovies = cache(async () => {
  const data = await db.query.movies.findMany();

  return data;
});

export const getMovieById = cache(async (movieId: number) => {
  const data = await db.query.movies.findFirst({
    where: eq(movies.id, movieId),
  });

  return data;
});

export const getShows = cache(async () => {
  const data = await db.query.shows.findMany();

  return data;
});

export const getShowById = cache(async (showId: number) => {
  const data = await db.query.shows.findFirst({
    where: eq(shows.id, showId),
  });

  return data;
});

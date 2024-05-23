"use server";

import {
  getListById,
  getListItemById,
  getMovieById,
  getShowById,
} from "@/db/queries";

export const getFirstPoster = async (listId: number) => {
  try {
    if (!listId) {
      console.error(`List with id ${listId} not found.`);
      return null;
    }

    const firstListItem = await getListItemById(listId);
    if (!firstListItem) {
      console.error(`First item in the list with id ${listId} not found.`);
      return null;
    }

    if (firstListItem.movieId) {
      const movie = await getMovieById(firstListItem.movieId);
      if (movie) {
        return movie.poster;
      } else {
        console.error(`Movie with id ${firstListItem.movieId} not found.`);
      }
    } else if (firstListItem.showId) {
      const show = await getShowById(firstListItem.showId);
      if (show) {
        return show.poster;
      } else {
        console.error(`Show with id ${firstListItem.showId} not found.`);
      }
    } else {
      console.error(
        `First item in the list does not have a valid movieId or showId.`
      );
    }
  } catch (error) {
    console.error(`Error fetching first poster: ${error}`);
  }

  return null;
};

// export const getListItem = async (listId: number) => {
//   try {
//     const listItem = await getListItemById(listId);
//     if (listItem?.itemType === "movie" && listItem.movieId) {
//       const movie = await getMovieById(listItem.movieId);
//       return movie;
//     } else if (listItem?.itemType === "show" && listItem.showId) {
//       const show = await getShowById(listItem.showId);
//       return show;
//     }
//     return null;
//   } catch (error) {
//     console.error(`Error: ${error}`);
//     return null;
//   }
// };

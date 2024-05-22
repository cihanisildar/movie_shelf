"use server";

import {
  getListById,
  getListItemById,
  getMovieById,
  getShowById,
} from "@/db/queries";

export const getFirstItemPoster = async (listId: number) => {
  const list = await getListById(listId);
  const firstListItem = await getListItemById(list?.id!);
  if (firstListItem?.movieId) {
    const movie = await getMovieById(firstListItem.id);
    return movie?.poster;
  } else if (firstListItem?.showId) {
    const show = await getShowById(firstListItem.id);
    return show?.poster;
  }
  return null;
};

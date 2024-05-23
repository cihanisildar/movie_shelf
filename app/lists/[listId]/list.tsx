import { listItems } from "@/db/schema";
import Card from "./card";
import { getMovieById, getShowById } from "@/db/queries";

type Props = {
  listItem: (typeof listItems.$inferSelect);
};

const List = async ({ listItem }: Props) => {
  let data = null;

  if (listItem.movieId) {
    data = await getMovieById(listItem.movieId);
  }

  if (!data && listItem.showId) {
    data = await getShowById(listItem.showId);
  }

  if (!data) {
    return null;
  }

  return (
    <div className="bg-green-100 w-fit flex ">
      <Card
        key={data.id}
        id={data.id}
        title={data.title}
        description={data.description}
        genre={data.genre}
        isWatched={data.isWatched}
        poster={data.poster!}
        type={data.type}
        year={data.year}
        href={data.href}
      />
    </div>
  );
};

export default List;

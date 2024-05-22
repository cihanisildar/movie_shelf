import { lists } from "@/db/schema";
import Card from "./card";
import { getListItemById, getMovieById, getShowById } from "@/db/queries";
type Props = {
  lists: (typeof lists.$inferSelect)[];
};

const List = async ({ lists }: Props) => {
 
  if (!lists) {
    return;
  }
  return (
    <div className=" place-items-center px-10	 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10">

      {lists.map((list) => (
        <Card
          key={list.id}
          id={list.id}
          name={list.name}
          description={list.description}
        />
      ))}
    </div>
  );
};

export default List;

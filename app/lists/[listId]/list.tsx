import { getListItem } from "@/actions/list_actions";
import { listItems } from "@/db/schema";
import Card from "./card";

type Props = {
  listItem: typeof listItems.$inferSelect;
};

const List = async ({ listItem }: Props) => {
  const data = await getListItem(listItem.listId);

  if (!data) {
    return null;
  }
  return (
    <div>
      <Card
        id={data.id}
        description={data.description}
        title={data.title}
        poster={data.poster}
        type={data.type}
        year={data.year}
        isWatched={data.isWatched}
        genre={data.genre}
        href={data.href}
      />
    </div>
  );
};

export default List;

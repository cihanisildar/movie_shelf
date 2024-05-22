import Navbar from "@/components/navbar";
import { getListItemsById, getMovieById } from "@/db/queries";
import Image from "next/image";
import { redirect } from "next/navigation";
import { FaCheck } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import List from "./list";

type Props = {
  params: {
    listId: number;
  };
};

const ListIdPage = async ({ params }: Props) => {
  const listData = await getListItemsById(params.listId);

  if (!listData) {
    redirect("/lists");
  }

  return (
    <div className=" h-screen w-screen">
      <Navbar
        background="bg-[#171717]"
        classname="text-[#ffffff]          "
        color1="#ffffff"
        color2="#000000"
      />
      {listData.map((listItem) => (
        <List key={listItem.id} listItem={listItem} />
      ))}
    </div>
  );
};

export default ListIdPage;

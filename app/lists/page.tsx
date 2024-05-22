import { getListItemById, getLists } from "@/db/queries";
import React from "react";
import List from "./list";
import Navbar from "@/components/navbar";

const Lists = async () => {
  const lists = await getLists();

  if (!lists) {
    return null;
  }
  return (
    <div className=" bg-gradient-to-br from-slate-200 to-stone-400 flex flex-col gap-10">
      <Navbar />
      <div className="w-full  px-10">
        <div className="border-b-2 border-slate-700">
          <h2 className=" text-2xl">Lists</h2>
        </div>
      </div>

      <List lists={lists} />
    </div>
  );
};

export default Lists;
("");

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
    <div className="bg-trnasparent flex flex-col gap-10">
      <Navbar
        background="bg-[#000]"
        classname="text-white"
        color1="#ffffff"
        color2="#000000"
      />
      <div className="w-full  px-10">
        <div className="flex flex-col gap-4 text-white">
          <h2 className="text-6xl font-extrabold">Lists</h2>
          <p className="max-w-3xl tracking-wide">
            Lists of movies or TV shows are like treasure chests full of
            entertainment waiting to be discovered. With so many options, these
            lists invite us on a journey of exploration, offering a diverse
            range of stories and emotions. So much to discover, so many worlds
            to explore—lists of movies and TV shows are a testament to the
            endless creativity of storytelling.
          </p>
        </div>
      </div>

      <List lists={lists} />
    </div>
  );
};

export default Lists;
("");

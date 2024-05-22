import Navbar from "@/components/navbar";
import React from "react";
import List from "./list";
import { getShows } from "@/db/queries";

const Shows = async () => {
  const shows = await getShows();

  if (!shows) {
    return null;
  }
  return (
    <div className="flex flex-col gap-10">
      <Navbar
        background="bg-[#000]"
        classname="text-white"
        color1="#ffffff"
        color2="#000000"
      />
      <div className="w-full  px-10">
        <div className="flex flex-col gap-4 text-white">
          <h2 className="text-6xl font-extrabold">TV Shows</h2>
          <p className="max-w-xl tracking-wide">
            In today's era, the small screen boasts an impressive array of
            content. From sitcoms and dramas to travel and talk shows, it's a
            treasure trove of entertainment. Here are the finest programs on TV.
          </p>
        </div>
      </div>

      <List shows={shows} />
    </div>
  );
};

export default Shows;

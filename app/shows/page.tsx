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
    <div className="bg-gradient-to-br from-slate-200 to-stone-400 flex flex-col gap-10">
      <Navbar />
      <div className="w-full  px-10">
        <div className="border-b-2 border-black">
          <h2 className="text-2xl ">Shows</h2>
        </div>
      </div>

      <List shows={shows} />
    </div>
  );
};

export default Shows;

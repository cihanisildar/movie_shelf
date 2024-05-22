import { getMovies } from "@/db/queries";
import React from "react";
import List from "./list";
import Navbar from "@/components/navbar";

const Movies = async () => {
  const movies = await getMovies();

  if (!movies) {
    return null;
  }
  return (
    <div className=" bg-gradient-to-br from-slate-200 to-stone-400 flex flex-col gap-10">
      <Navbar />
      <div className="w-full  px-10">
        <div className="border-b-2 border-slate-700">
          <h2 className=" text-2xl">Movies</h2>
        </div>
      </div>

      <List movies={movies} />
    </div>
  );
};

export default Movies;
("");

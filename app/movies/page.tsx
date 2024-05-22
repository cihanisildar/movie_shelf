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
    <div className=" flex flex-col gap-10">
      <Navbar
        background="bg-[#171717]"
        classname="text-[#ffffff]          "
        color1="#ffffff"
        color2="#000000"
      />
      <div className="w-full  px-10">
        <div className="flex flex-col gap-4 text-white">
          <h2 className=" text-6xl font-extrabold">Movies</h2>
          <p className="max-w-xl tracking-wide">
            Movies have an unparalleled ability to captivate us, whether they're
            thrilling, hilarious, poignant, or romantic. With each film, we're
            transported to new worlds and immersed in unforgettable stories.
          </p>
        </div>
      </div>

      <List movies={movies} />
    </div>
  );
};

export default Movies;
("");

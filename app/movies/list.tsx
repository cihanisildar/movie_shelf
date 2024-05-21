"use client"

import { movies } from "@/db/schema";
import Card from "./card";
import Lenis from "lenis";
import { useEffect } from "react";
type Props = {
  movies: (typeof movies.$inferSelect)[];
};

const List = ({ movies }: Props) => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  if (!movies) {
    return;
  }
  return (
    <div className=" place-items-center px-10	 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10">
      {movies.map((movie) => (
        <Card
          key={movie.id}
          id={movie.id}
          title={movie.title}
          description={movie.description}
          genre={movie.genre}
          isWatched={movie.isWatched}
          poster={movie.poster!}
          type={movie.type}
          year={movie.year}
          href={movie.href}
        />
      ))}
    </div>
  );
};

export default List;

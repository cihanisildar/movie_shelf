"use client"

import { movies, shows } from "@/db/schema";
import Lenis from "lenis";
import { useEffect } from "react";
import Card from "./card";
type Props = {
  shows: (typeof shows.$inferSelect)[];
};

const List = ({ shows }: Props) => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  if (!shows) {
    return;
  }
  return (
    <div className=" place-items-center px-10	 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10">
      {shows.map((show) => (
        <Card
          key={show.id}
          id={show.id}
          title={show.title}
          description={show.description}
          genre={show.genre}
          isWatched={show.isWatched}
          poster={show.poster!}
          type={show.type}
          year={show.year}
          href={show.href}
        />
      ))}
    </div>
  );
};

export default List;

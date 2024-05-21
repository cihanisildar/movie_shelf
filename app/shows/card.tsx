"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  id: number;
  title: string;
  description: string;
  poster: string;
  type: "movie" | "show";
  year: number;
  isWatched: boolean;
  genre: string[];
  href: string
};

const Card = ({
  description,
  genre,
  id,
  isWatched,
  poster,
  title,
  type,
  year,
  href
}: Props) => {
  return (
    <Link href={`/shows/${id}`}>
      <div className="card-container w-52 h-80 relative overflow-hidden transition-all ease-out cursor-pointer hover:scale-[1.02]">
        <Image
          className="absolute"
          src={poster}
          alt="poster"
          layout="fill"
          objectFit="cover"
        />
        <motion.div
          className="title-overlay absolute  inset-0 bg-black bg-opacity-50 flex items-end justify-center opacity-0 hover:opacity-100 transition-opacity"
          whileHover={{ opacity: 1 }}
        >
          <motion.h3
            whileHover={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-white mb-2 z-10"
          >
            {title}
          </motion.h3>
        </motion.div>
      </div>
    </Link>
  );
};

export default Card;

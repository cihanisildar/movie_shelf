"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
  id: number;
  name: string;
  description: string;
  data: string | null;
};

const Card = ({ id, name, description, data }: Props) => {
  console.log(data);

  const poster = data ? data : "/images/6.jpg";
  return (
    <Link href={`/lists/${id}`}>
      <div className="card-container w-52 h-80 relative overflow-hidden transition-all ease-out cursor-pointer hover:scale-[1.02]">
        <Image
          className="absolute"
          src={poster}
          alt="poster"
          layout="fill"
          objectFit="cover"
        />
        <motion.div
          className="title-overlay absolute inset-0 bg-black bg-opacity-50 flex items-end justify-center opacity-0 hover:opacity-100 transition-opacity"
          whileHover={{ opacity: 1 }}
        >
          <motion.h3
            whileHover={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-white mb-2 z-10"
          >
            {name}
          </motion.h3>
        </motion.div>
      </div>
    </Link>
  );
};

export default Card;

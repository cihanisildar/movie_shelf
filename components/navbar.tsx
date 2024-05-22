"use client";

import { motion } from "framer-motion";
import { Dongle } from "next/font/google";
const roboto_slab = Dongle({ subsets: ["latin"], weight: "300" });

import Link from "next/link";
import { BiSolidCameraMovie } from "react-icons/bi";

type Props = {
  classname: string;
  color1: string;
  color2: string;
  background: string;
};

const Navbar = ({ classname, color1, color2, background }: Props) => {
  return (
    <div className={background}>
      <div className="flex items-center justify-between py-3 px-6 ">
        <Link href="/">
          <div className="flex gap-4 items-center justify-center">
            <BiSolidCameraMovie className={`${classname} mb-3`} size={50} />
            <div
              className={`${roboto_slab.className} ${classname} text-7xl tracking-widest`}
            >
              Cinévo
            </div>
          </div>
        </Link>
        <div className="flex justify-between text-sm font-extralight gap-10">
          <motion.div
            className="relative"
            initial="hidden"
            whileHover="visible"
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Link href="/movies">
              <motion.h3
                className="relative z-10 cursor-pointer"
                initial={{ color: color1 }}
                whileHover={{ color: color2 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                MOVIES
              </motion.h3>
            </Link>

            <motion.div
              className="absolute inset-0 z-0 "
              style={{ background: "white" }}
              variants={{
                hidden: { opacity: 0, top: "100%" },
                visible: { opacity: 1, top: "0%" },
              }}
            />
          </motion.div>
          <motion.div
            className="relative"
            initial="hidden"
            whileHover="visible"
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Link href="/shows">
              <motion.h3
                className="relative z-10 cursor-pointer"
                initial={{ color: color1 }}
                whileHover={{ color: color2 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                TV SHOWS
              </motion.h3>
            </Link>

            <motion.div
              className="absolute inset-0 z-0"
              style={{ background: "white" }}
              variants={{
                hidden: { opacity: 0, top: "100%" },
                visible: { opacity: 1, top: "0%" },
              }}
            />
          </motion.div>
          <motion.div
            className="relative"
            initial="hidden"
            whileHover="visible"
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Link href="/lists">
              <motion.h3
                className="relative z-10 cursor-pointer"
                initial={{ color: color1 }}
                whileHover={{ color: color2 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                LISTS
              </motion.h3>
            </Link>

            <motion.div
              className="absolute inset-0 z-0"
              style={{ background: "white" }}
              variants={{
                hidden: { opacity: 0, top: "100%" },
                visible: { opacity: 1, top: "0%" },
              }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

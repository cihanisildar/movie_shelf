"use client";

import { motion } from "framer-motion";
import { Dongle } from "next/font/google";
const roboto_slab = Dongle({ subsets: ["latin"], weight: "300" });

import Link from "next/link";

const Navbar = () => {
  return (
    <div className="backdrop-blur-sm">
      <div className="flex items-center justify-between py-8 px-10 ">
        <h2
          className={`${roboto_slab.className} text-7xl tracking-widest text-white`}
        >
          {" "}
          <Link href="/">Cinévo</Link>
        </h2>
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
                initial={{ color: "#ffffff" }}
                whileHover={{ color: "#000000" }}
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
                initial={{ color: "#ffffff" }}
                whileHover={{ color: "#000000" }}
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
                initial={{ color: "#ffffff" }}
                whileHover={{ color: "#000000" }}
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

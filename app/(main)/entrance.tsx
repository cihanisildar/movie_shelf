import styles from "./page.module.scss";
import { Pacifico, Dongle } from "next/font/google";
const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });
const roboto_slab = Dongle({ subsets: ["latin"], weight: "300" });
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";

const Entrance = () => {
  return (
    <div className={styles.entrance}>
      <Navbar
        background="backdrop-blur-sm"
        classname="text-white"
        color1="#ffffff"
        color2="#000000"
      />
      <div className="flex items-center justify-center bg-purple-200">
        <div
          className={`${roboto_slab.className} absolute top-1/3 text-center  lg:text-4xl  text-white w-[800px] `}
        >
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            My cinematic sanctuary. Embark on a journey through my favorite
            films, reviews, and musings. Dive deep into the stories that have
            captured my heart and shaped my love for cinema.
          </motion.p>
        </div>
      </div>

      {/* <div></div> */}
    </div>
  );
};

export default Entrance;

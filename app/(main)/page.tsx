"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import { useTransform, useScroll, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import useDimension from "@/components/useDimension";
import { images } from "@/constants";
import Entrance from "./entrance";
import Footer from "./footer";

export default function Home() {
  const container = useRef(null);
  const { height } = useDimension();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"], //when i want to start the animation and when to end
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();// lenis scroll for smooth scrolling

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
  return (
    <main className={styles.main}>
      <Entrance />
      <div ref={container} className={styles.gallery}>
        {/* choosing this div cuz i want to track the scroll inside here */}
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[9], images[10], images[11]]} y={y4} />
      </div>
      <Footer />
    </main>
  );
}

const Column = ({ images, y = 0 }: any) => {
  return (
    <motion.div style={{ y }} className={styles.column}>
      {images.map((src: string, i: number) => {
        return (
          <div key={i} className={styles.imageContainer}>
            <Image src={`/images/${src}`} alt="image" fill />
          </div>
        );
      })}
    </motion.div>
  );
};

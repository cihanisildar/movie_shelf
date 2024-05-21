import "dotenv/config";

import * as schema from "../db/schema";
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";

const sql = postgres(process.env.DATABASE_URL!);

const db = drizzle(sql, { schema }); // Pass the schema here

const main = async () => {
  try {
    console.log("Seeding Database");

    await db.delete(schema.movies);
    await db.delete(schema.shows);

    await db.insert(schema.movies).values([
      {
        title: "The Man From Earth",
        description:
          "On a cold night in a remote cabin, Professor John Oldman (David Lee Smith of CSI: Miami) gathers his most trusted colleagues for an extraordinary announcement: He is an immortal who has migrated through 140 centuries of evolution and must now move on. Is Oldman truly Cro-Magnon or simply insane?",
        isWatched: true,
        poster: "/images/1.png",
        type: "movie",
        year: 2007,
        genre: ["Sci-fi", "Mystery"],
        href: "the-man-from-earth",
      },
      {
        title: "Chernobyl",
        description:
          "In April 1986, a huge explosion erupted at the Chernobyl nuclear power station in northern Ukraine. This series follows the stories of the men and women, who tried to contain the disaster, as well as those who gave their lives preventing a subsequent and worse one.",
        isWatched: true,
        poster: "/images/2.png",
        type: "show",
        year: 2019,
        genre: ["History", "Drama", "Thriller"],
        href: "chernobyl",
      },
      {
        title: "Dune",
        description:
          "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.",
        isWatched: true,
        poster: "/images/4.jpg",
        type: "movie",
        year: 2021,
        genre: ["Action", "Adventure", "Drama"],
        href: "dune",
      },
      {
        title: "Coherence",
        description:
          "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.",
        isWatched: true,
        poster: "/images/3.jpg",
        type: "movie",
        year: 2021,
        genre: ["Action", "Adventure", "Drama"],
        href: "coherence",
      },
      {
        title: "The Pianist",
        description:
          "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.",
        isWatched: true,
        poster: "/images/9.jpg",
        type: "movie",
        year: 2021,
        genre: ["Action", "Adventure", "Drama"],
        href: "the-pianist",
      },
      {
        title: "Whiplash",
        description:
          "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.",
        isWatched: true,
        poster: "/images/10.png",
        type: "movie",
        year: 2021,
        genre: ["Action", "Adventure", "Drama"],
        href: "whiplash",
      },
      {
        title: "The Pianist",
        description:
          "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.",
        isWatched: true,
        poster: "/images/9.jpg",
        type: "movie",
        year: 2021,
        genre: ["Action", "Adventure", "Drama"],
        href: "the-pianist",
      },
      {
        title: "The Pianist",
        description:
          "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.",
        isWatched: true,
        poster: "/images/9.jpg",
        type: "movie",
        year: 2021,
        genre: ["Action", "Adventure", "Drama"],
        href: "the-pianist",
      },
      {
        title: "The Pianist",
        description:
          "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.",
        isWatched: true,
        poster: "/images/9.jpg",
        type: "movie",
        year: 2021,
        genre: ["Action", "Adventure", "Drama"],
        href: "the-pianist",
      },
      {
        title: "The Pianist",
        description:
          "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.",
        isWatched: true,
        poster: "/images/9.jpg",
        type: "movie",
        year: 2021,
        genre: ["Action", "Adventure", "Drama"],
        href: "the-pianist",
      },
      {
        title: "The Pianist",
        description:
          "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.",
        isWatched: true,
        poster: "/images/9.jpg",
        type: "movie",
        year: 2021,
        genre: ["Action", "Adventure", "Drama"],
        href: "the-pianist",
      },
      {
        title: "The Pianist",
        description:
          "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.",
        isWatched: true,
        poster: "/images/9.jpg",
        type: "movie",
        year: 2021,
        genre: ["Action", "Adventure", "Drama"],
        href: "the-pianist",
      },
      {
        title: "The Pianist",
        description:
          "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.",
        isWatched: true,
        poster: "/images/9.jpg",
        type: "movie",
        year: 2021,
        genre: ["Action", "Adventure", "Drama"],
        href: "the-pianist",
      },
      {
        title: "The Pianist",
        description:
          "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.",
        isWatched: true,
        poster: "/images/9.jpg",
        type: "movie",
        year: 2021,
        genre: ["Action", "Adventure", "Drama"],
        href: "the-pianist",
      },

      {
        title: "The Pianist",
        description:
          "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.",
        isWatched: true,
        poster: "/images/9.jpg",
        type: "movie",
        year: 2021,
        genre: ["Action", "Adventure", "Drama"],
        href: "the-pianist",
      },

      {
        title: "The Pianist",
        description:
          "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.",
        isWatched: true,
        poster: "/images/9.jpg",
        type: "movie",
        year: 2021,
        genre: ["Action", "Adventure", "Drama"],
        href: "the-pianist",
      },
    ]);

    await db.insert(schema.shows).values([
      {
        title: "Game of Thrones",
        description:
          "On a cold night in a remote cabin, Professor John Oldman (David Lee Smith of CSI: Miami) gathers his most trusted colleagues for an extraordinary announcement: He is an immortal who has migrated through 140 centuries of evolution and must now move on. Is Oldman truly Cro-Magnon or simply insane?",
        isWatched: true,
        poster: "/images/5.jpeg",
        type: "movie",
        year: 2007,
        genre: ["Sci-fi", "Mystery"],
        href: "game-of-thrones",
      },
      {
        title: "Love, Death & Robots",
        description:
          "On a cold night in a remote cabin, Professor John Oldman (David Lee Smith of CSI: Miami) gathers his most trusted colleagues for an extraordinary announcement: He is an immortal who has migrated through 140 centuries of evolution and must now move on. Is Oldman truly Cro-Magnon or simply insane?",
        isWatched: true,
        poster: "/images/6.jpg",
        type: "movie",
        year: 2007,
        genre: ["Sci-fi", "Mystery"],
        href: "game-of-thrones",
      },
      {
        title: "Monster",
        description:
          "On a cold night in a remote cabin, Professor John Oldman (David Lee Smith of CSI: Miami) gathers his most trusted colleagues for an extraordinary announcement: He is an immortal who has migrated through 140 centuries of evolution and must now move on. Is Oldman truly Cro-Magnon or simply insane?",
        isWatched: true,
        poster: "/images/7.png",
        type: "movie",
        year: 2007,
        genre: ["Sci-fi", "Mystery"],
        href: "game-of-thrones",
      },
      {
        title: "Monster",
        description:
          "On a cold night in a remote cabin, Professor John Oldman (David Lee Smith of CSI: Miami) gathers his most trusted colleagues for an extraordinary announcement: He is an immortal who has migrated through 140 centuries of evolution and must now move on. Is Oldman truly Cro-Magnon or simply insane?",
        isWatched: true,
        poster: "/images/7.png",
        type: "movie",
        year: 2007,
        genre: ["Sci-fi", "Mystery"],
        href: "game-of-thrones",
      },
      {
        title: "Monster",
        description:
          "On a cold night in a remote cabin, Professor John Oldman (David Lee Smith of CSI: Miami) gathers his most trusted colleagues for an extraordinary announcement: He is an immortal who has migrated through 140 centuries of evolution and must now move on. Is Oldman truly Cro-Magnon or simply insane?",
        isWatched: true,
        poster: "/images/7.png",
        type: "movie",
        year: 2007,
        genre: ["Sci-fi", "Mystery"],
        href: "game-of-thrones",
      },
      {
        title: "Monster",
        description:
          "On a cold night in a remote cabin, Professor John Oldman (David Lee Smith of CSI: Miami) gathers his most trusted colleagues for an extraordinary announcement: He is an immortal who has migrated through 140 centuries of evolution and must now move on. Is Oldman truly Cro-Magnon or simply insane?",
        isWatched: true,
        poster: "/images/7.png",
        type: "movie",
        year: 2007,
        genre: ["Sci-fi", "Mystery"],
        href: "game-of-thrones",
      },
      {
        title: "Monster",
        description:
          "On a cold night in a remote cabin, Professor John Oldman (David Lee Smith of CSI: Miami) gathers his most trusted colleagues for an extraordinary announcement: He is an immortal who has migrated through 140 centuries of evolution and must now move on. Is Oldman truly Cro-Magnon or simply insane?",
        isWatched: true,
        poster: "/images/7.png",
        type: "movie",
        year: 2007,
        genre: ["Sci-fi", "Mystery"],
        href: "game-of-thrones",
      },

      {
        title: "Monster",
        description:
          "On a cold night in a remote cabin, Professor John Oldman (David Lee Smith of CSI: Miami) gathers his most trusted colleagues for an extraordinary announcement: He is an immortal who has migrated through 140 centuries of evolution and must now move on. Is Oldman truly Cro-Magnon or simply insane?",
        isWatched: true,
        poster: "/images/7.png",
        type: "movie",
        year: 2007,
        genre: ["Sci-fi", "Mystery"],
        href: "game-of-thrones",
      },
      {
        title: "Monster",
        description:
          "On a cold night in a remote cabin, Professor John Oldman (David Lee Smith of CSI: Miami) gathers his most trusted colleagues for an extraordinary announcement: He is an immortal who has migrated through 140 centuries of evolution and must now move on. Is Oldman truly Cro-Magnon or simply insane?",
        isWatched: true,
        poster: "/images/7.png",
        type: "movie",
        year: 2007,
        genre: ["Sci-fi", "Mystery"],
        href: "game-of-thrones",
      },
      {
        title: "Monster",
        description:
          "On a cold night in a remote cabin, Professor John Oldman (David Lee Smith of CSI: Miami) gathers his most trusted colleagues for an extraordinary announcement: He is an immortal who has migrated through 140 centuries of evolution and must now move on. Is Oldman truly Cro-Magnon or simply insane?",
        isWatched: true,
        poster: "/images/7.png",
        type: "movie",
        year: 2007,
        genre: ["Sci-fi", "Mystery"],
        href: "game-of-thrones",
      },
      {
        title: "Monster",
        description:
          "On a cold night in a remote cabin, Professor John Oldman (David Lee Smith of CSI: Miami) gathers his most trusted colleagues for an extraordinary announcement: He is an immortal who has migrated through 140 centuries of evolution and must now move on. Is Oldman truly Cro-Magnon or simply insane?",
        isWatched: true,
        poster: "/images/7.png",
        type: "movie",
        year: 2007,
        genre: ["Sci-fi", "Mystery"],
        href: "game-of-thrones",
      },
      {
        title: "Monster",
        description:
          "On a cold night in a remote cabin, Professor John Oldman (David Lee Smith of CSI: Miami) gathers his most trusted colleagues for an extraordinary announcement: He is an immortal who has migrated through 140 centuries of evolution and must now move on. Is Oldman truly Cro-Magnon or simply insane?",
        isWatched: true,
        poster: "/images/7.png",
        type: "movie",
        year: 2007,
        genre: ["Sci-fi", "Mystery"],
        href: "game-of-thrones",
      },
      {
        title: "Monster",
        description:
          "On a cold night in a remote cabin, Professor John Oldman (David Lee Smith of CSI: Miami) gathers his most trusted colleagues for an extraordinary announcement: He is an immortal who has migrated through 140 centuries of evolution and must now move on. Is Oldman truly Cro-Magnon or simply insane?",
        isWatched: true,
        poster: "/images/7.png",
        type: "movie",
        year: 2007,
        genre: ["Sci-fi", "Mystery"],
        href: "game-of-thrones",
      },
      {
        title: "Monster",
        description:
          "On a cold night in a remote cabin, Professor John Oldman (David Lee Smith of CSI: Miami) gathers his most trusted colleagues for an extraordinary announcement: He is an immortal who has migrated through 140 centuries of evolution and must now move on. Is Oldman truly Cro-Magnon or simply insane?",
        isWatched: true,
        poster: "/images/7.png",
        type: "movie",
        year: 2007,
        genre: ["Sci-fi", "Mystery"],
        href: "game-of-thrones",
      },
      {
        title: "Monster",
        description:
          "On a cold night in a remote cabin, Professor John Oldman (David Lee Smith of CSI: Miami) gathers his most trusted colleagues for an extraordinary announcement: He is an immortal who has migrated through 140 centuries of evolution and must now move on. Is Oldman truly Cro-Magnon or simply insane?",
        isWatched: true,
        poster: "/images/7.png",
        type: "movie",
        year: 2007,
        genre: ["Sci-fi", "Mystery"],
        href: "game-of-thrones",
      },
      
    ]);

    console.log("Seeding finished");
  } catch (error) {
    console.log(error);
    throw new Error("Failed to seed the database");
  }
};

main();

import "dotenv/config";
import * as schema from "../db/schema";
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";

const sql = postgres(process.env.DATABASE_URL!);

const db = drizzle(sql, { schema }); // Pass the schema here

const main = async () => {
  try {
    console.log("Seeding Database");

    // Clear existing data
    await db.delete(schema.listItems);
    await db.delete(schema.lists);
    await db.delete(schema.movies);
    await db.delete(schema.shows);

    // Insert movies and capture inserted IDs
    const movies = await db.insert(schema.movies).values([
      {
        title: "The Man From Earth",
        description: "On a cold night in a remote cabin, Professor John Oldman...",
        isWatched: true,
        poster: "/images/1.png",
        type: "movie",
        year: 2007,
        genre: ["Sci-fi", "Mystery"],
        href: "the-man-from-earth",
      },
      {
        title: "Dune",
        description: "A noble family becomes embroiled in a war for control...",
        isWatched: true,
        poster: "/images/4.jpg",
        type: "movie",
        year: 2021,
        genre: ["Action", "Adventure", "Drama"],
        href: "dune",
      },
      {
        title: "Coherence",
        description: "A noble family becomes embroiled in a war for control...",
        isWatched: true,
        poster: "/images/3.jpg",
        type: "movie",
        year: 2021,
        genre: ["Action", "Adventure", "Drama"],
        href: "coherence",
      },
      {
        title: "The Pianist",
        description: "A noble family becomes embroiled in a war for control...",
        isWatched: true,
        poster: "/images/9.jpg",
        type: "movie",
        year: 2021,
        genre: ["Action", "Adventure", "Drama"],
        href: "the-pianist",
      },
      {
        title: "The Pianist",
        description: "A noble family becomes embroiled in a war for control...",
        isWatched: true,
        poster: "/images/9.jpg",
        type: "movie",
        year: 2021,
        genre: ["Action", "Adventure", "Drama"],
        href: "the-pianist",
      },
      {
        title: "The Pianist",
        description: "A noble family becomes embroiled in a war for control...",
        isWatched: true,
        poster: "/images/9.jpg",
        type: "movie",
        year: 2021,
        genre: ["Action", "Adventure", "Drama"],
        href: "the-pianist",
      },
      {
        title: "The Pianist",
        description: "A noble family becomes embroiled in a war for control...",
        isWatched: true,
        poster: "/images/9.jpg",
        type: "movie",
        year: 2021,
        genre: ["Action", "Adventure", "Drama"],
        href: "the-pianist",
      },
      {
        title: "The Pianist",
        description: "A noble family becomes embroiled in a war for control...",
        isWatched: true,
        poster: "/images/9.jpg",
        type: "movie",
        year: 2021,
        genre: ["Action", "Adventure", "Drama"],
        href: "the-pianist",
      },
      {
        title: "The Pianist",
        description: "A noble family becomes embroiled in a war for control...",
        isWatched: true,
        poster: "/images/9.jpg",
        type: "movie",
        year: 2021,
        genre: ["Action", "Adventure", "Drama"],
        href: "the-pianist",
      },
      {
        title: "The Pianist",
        description: "A noble family becomes embroiled in a war for control...",
        isWatched: true,
        poster: "/images/9.jpg",
        type: "movie",
        year: 2021,
        genre: ["Action", "Adventure", "Drama"],
        href: "the-pianist",
      },
      {
        title: "The Pianist",
        description: "A noble family becomes embroiled in a war for control...",
        isWatched: true,
        poster: "/images/9.jpg",
        type: "movie",
        year: 2021,
        genre: ["Action", "Adventure", "Drama"],
        href: "the-pianist",
      },
      {
        title: "The Pianist",
        description: "A noble family becomes embroiled in a war for control...",
        isWatched: true,
        poster: "/images/9.jpg",
        type: "movie",
        year: 2021,
        genre: ["Action", "Adventure", "Drama"],
        href: "the-pianist",
      },
      {
        title: "The Pianist",
        description: "A noble family becomes embroiled in a war for control...",
        isWatched: true,
        poster: "/images/9.jpg",
        type: "movie",
        year: 2021,
        genre: ["Action", "Adventure", "Drama"],
        href: "the-pianist",
      },
      
      {
        title: "Whiplash",
        description: "A noble family becomes embroiled in a war for control...",
        isWatched: true,
        poster: "/images/10.png",
        type: "movie",
        year: 2021,
        genre: ["Action", "Adventure", "Drama"],
        href: "whiplash",
      },
    ]).returning({ id: schema.movies.id });

    const movieIds = movies.map(movie => movie.id);

    // Insert shows and capture inserted IDs
    const shows = await db.insert(schema.shows).values([
      {
        title: "Chernobyl",
        description: "In April 1986, a huge explosion erupted at the Chernobyl...",
        isWatched: true,
        poster: "/images/2.png",
        type: "show",
        year: 2019,
        genre: ["History", "Drama", "Thriller"],
        href: "chernobyl",
      },
      {
        title: "Game of Thrones",
        description: "On a cold night in a remote cabin, Professor John Oldman...",
        isWatched: true,
        poster: "/images/5.jpeg",
        type: "show",
        year: 2007,
        genre: ["Sci-fi", "Mystery"],
        href: "game-of-thrones",
      },
      {
        title: "Love, Death & Robots",
        description: "On a cold night in a remote cabin, Professor John Oldman...",
        isWatched: true,
        poster: "/images/6.jpg",
        type: "show",
        year: 2007,
        genre: ["Sci-fi", "Mystery"],
        href: "love-death-robots",
      },
      {
        title: "Monster",
        description: "On a cold night in a remote cabin, Professor John Oldman...",
        isWatched: true,
        poster: "/images/7.png",
        type: "show",
        year: 2007,
        genre: ["Sci-fi", "Mystery"],
        href: "monster",
      },
    ]).returning({ id: schema.shows.id });

    const showIds = shows.map(show => show.id);

    // Insert lists and capture inserted IDs
    const lists = await db.insert(schema.lists).values([
      {
        name: "Sci-fi Favorites",
        description: "A list of favorite sci-fi movies and shows",
      },
      {
        name: "Drama Collection",
        description: "Collection of the best drama movies and shows",
      },
      {
        name: "Watched Recently",
        description: "Movies and shows watched recently",
      },
    ]).returning({ id: schema.lists.id });

    const listIds = lists.map(list => list.id);

    await db.insert(schema.listItems).values([

      { listId: listIds[0], movieId: movieIds[0], itemType: "movie" }, // The Man From Earth
      { listId: listIds[0], movieId: movieIds[1], itemType: "movie" }, // Dune
      { listId: listIds[0], movieId: movieIds[2], itemType: "movie" }, // Coherence
      { listId: listIds[0], showId: showIds[0], itemType: "show" }, // Chernobyl

      { listId: listIds[1], movieId: movieIds[3], itemType: "movie" }, // The Pianist
      { listId: listIds[1], movieId: movieIds[4], itemType: "movie" }, // Whiplash
      { listId: listIds[1], movieId: movieIds[0], itemType: "movie" }, // The Man From Earth
      { listId: listIds[1], showId: showIds[0], itemType: "show" }, // Chernobyl
      { listId: listIds[1], showId: showIds[1], itemType: "show" }, // Game of Thrones

      { listId: listIds[2], movieId: movieIds[0], itemType: "movie" }, // The Man From Earth
      { listId: listIds[2], showId: showIds[0], itemType: "show" }, // Chernobyl
      { listId: listIds[2], movieId: movieIds[1], itemType: "movie" }, // Dune
      { listId: listIds[2], movieId: movieIds[4], itemType: "movie" }, // Whiplash
      { listId: listIds[2], showId: showIds[2], itemType: "show" }, // Love, Death & Robots
    ]);

    console.log("Seeding finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed the database");
  }
};

main();

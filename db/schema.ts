import { pgTable, serial, text, integer, boolean } from "drizzle-orm/pg-core";

export const movies = pgTable("movies", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  poster: text("poster"),
  type: text("type", { enum: ["movie", "show"] })
    .default("movie")
    .notNull(),
  year: integer("year").notNull(),
  isWatched: boolean("is_watched").default(false).notNull(),
  genre: text("genre").array().notNull(),
  href: text("href").notNull(),
});

export const shows = pgTable("shows", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  poster: text("poster"),
  type: text("type", { enum: ["movie", "show"] })
    .default("show")
    .notNull(),
  year: integer("year").notNull(),
  isWatched: boolean("is_watched").default(false).notNull(),
  genre: text("genre").array().notNull(),
  href: text("href").notNull(),
});

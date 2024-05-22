import { pgTable, serial, text, integer, boolean } from "drizzle-orm/pg-core";

// Movies table
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

// Shows table
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

export const lists = pgTable("lists", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
});

export const listItems = pgTable("list_items", {
  id: serial("id").primaryKey(),
  listId: integer("list_id")
    .references(() => lists.id)
    .notNull(),
  movieId: integer("movie_id").references(() => movies.id),
  showId: integer("show_id").references(() => shows.id),
  itemType: text("item_type", { enum: ["movie", "show"] }).notNull(),
});

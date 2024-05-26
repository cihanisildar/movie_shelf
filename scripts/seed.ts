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
    const movies = await db
      .insert(schema.movies)
      .values([
        {
          title: "The Man From Earth",
          description:
            "On a cold night in a remote cabin, Professor John Oldman...",
          isWatched: true,
          poster: "/images/1.png",
          type: "movie",
          year: 2007,
          genre: ["Sci-fi", "Mystery"],
          href: "the-man-from-earth",
        },
        {
          title: "Dune",
          description:
            "A noble family becomes embroiled in a war for control...",
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
            "Strange things begin to happen when a group of friends gather for a dinner party on an evening when a comet is passing overhead.",
          isWatched: true,
          poster: "/images/3.jpg",
          type: "movie",
          year: 2013,
          genre: ["Mystery", "Sci-fi", "Drama"],
          href: "coherence",
        },
        {
          title: "The Pianist",
          description:
            "During WWII, acclaimed Polish musician Wladyslaw faces various struggles as he loses contact with his family. As the situation worsens, he hides in the ruins of Warsaw in order to survive.",
          isWatched: true,
          poster: "/images/9.jpg",
          type: "movie",
          year: 2002,
          genre: ["Biography", "Music", "Drama"],
          href: "the-pianist",
        },

        {
          title: "Whiplash",
          description:
            "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
          isWatched: true,
          poster: "/images/10.png",
          type: "movie",
          year: 2014,
          genre: ["Music", "Drama"],
          href: "whiplash",
        },
        {
          title: "Django Unchained",
          description:
            "With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation owner in Mississippi.",
          isWatched: true,
          poster: "/images/django.png",
          type: "movie",
          year: 2012,
          genre: ["Comedy", "Western", "Drama"],
          href: "django",
        },
        {
          title: "Goodfellas",
          description:
            "The story of Henry Hill and his life in the mafia, covering his relationship with his wife Karen and his mob partners Jimmy Conway and Tommy DeVito.",
          isWatched: true,
          poster: "/images/goodfellas.png",
          type: "movie",
          year: 1990,
          genre: ["Biography", "Crime", "Drama"],
          href: "goodfellas",
        },
        {
          title: "Oppenheimer",
          description:
            "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
          isWatched: true,
          poster: "/images/oppenheimer.jpg",
          type: "movie",
          year: 1990,
          genre: ["Biography", "History", "Drama"],
          href: "oppenheimer",
        },
        {
          title: "Shutter Island",
          description:
            "Teddy Daniels and Chuck Aule, two US marshals, are sent to an asylum on a remote island in order to investigate the disappearance of a patient, where Teddy uncovers a shocking truth about the place.",
          isWatched: true,
          poster: "/images/shutterisland.jpeg",
          type: "movie",
          year: 2010,
          genre: ["Thriller", "Mistery", "Drama"],
          href: "shutterisland",
        },
        {
          title: "Spider-Man: Into the Spider-Verse",
          description:
            "Teen Miles Morales becomes the Spider-Man of his universe and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
          isWatched: true,
          poster: "/images/spidermanintothespiderverse.jpeg",
          type: "movie",
          year: 2018,
          genre: ["Animation", "Action", "Adventure"],
          href: "spidermanintothespiderverse",
        },
        {
          title: "Taxi Driver",
          description:
            "A mentally unstable veteran works as a nighttime taxi driver in New York City, where the perceived decadence and sleaze fuels his urge for violent action.",
          isWatched: true,
          poster: "/images/taxidriver.jpeg",
          type: "movie",
          year: 1976,
          genre: ["Drama", "Crime"],
          href: "taxidriver",
        },
        {
          title: "The Shining",
          description:
            "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
          isWatched: true,
          poster: "/images/theshining.jpeg",
          type: "movie",
          year: 1980,
          genre: ["Drama", "Horror"],
          href: "theshining",
        },
        {
          title: "The Thing",
          description:
            "A research team in Antarctica is hunted by a shape-shifting alien that assumes the appearance of its victims.",
          isWatched: true,
          poster: "/images/thething.jpeg",
          type: "movie",
          year: 1980,
          genre: ["Mystery", "Horror", "Sci-fi"],
          href: "thething",
        },
      ])
      .returning({ id: schema.movies.id });

    const movieIds = movies.map((movie) => movie.id);

    // Insert shows and capture inserted IDs
    const shows = await db
      .insert(schema.shows)
      .values([
        {
          title: "Chernobyl",
          description:
            "In April 1986, a huge explosion erupted at the Chernobyl...",
          isWatched: true,
          poster: "/images/2.png",
          type: "show",
          year: 2019,
          genre: ["History", "Drama", "Thriller"],
          href: "chernobyl",
        },
        {
          title: "Game of Thrones",
          description:
            "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
          isWatched: true,
          poster: "/images/5.jpeg",
          type: "show",
          year: 2011,
          genre: ["Action", "Drama", "Adventure"],
          href: "game-of-thrones",
        },
        {
          title: "Love, Death & Robots",
          description:
            "A collection of animated short stories that span various genres including science fiction, fantasy, horror and comedy.",
          isWatched: true,
          poster: "/images/6.jpg",
          type: "show",
          year: 2019,
          genre: ["Sci-fi", "Mystery"],
          href: "love-death-robots",
        },
        {
          title: "Monster",
          description:
            "Tenma, a brilliant neurosurgeon with a promising future, risks his career to save the life of a critically wounded young boy. The boy, now a charismatic young man, reappears 9 years later in the midst of a string of unusual serial murders.",
          isWatched: true,
          poster: "/images/7.png",
          type: "show",
          year: 2004,
          genre: ["Animation", "Crime", "Drama"],
          href: "monster",
        },
        {
          title: "Fleabag",
          description:
            "Tenma, a brilliant neurosurgeon with a promising future, risks his career to save the life of a critically wounded young boy. The boy, now a charismatic young man, reappears 9 years later in the midst of a string of unusual serial murders.",
          isWatched: true,
          poster: "/images/flebag.png",
          type: "show",
          year: 2016,
          genre: ["Comedy", "Drama"],
          href: "flebag",
        },
        {
          title: "House of Cards",
          description:
            "A Congressman works with his equally conniving wife to exact revenge on the people who betrayed him.",
          isWatched: true,
          poster: "/images/houseofcards.jpg",
          type: "show",
          year: 2013,
          genre: ["Drama"],
          href: "houseofcards",
        },
        {
          title: "Invincible",
          description:
            "An adult animated series based on the Skybound/Image comic about a teenager whose father is the most powerful superhero on the planet.",
          isWatched: true,
          poster: "/images/invincible.jpg",
          type: "show",
          year: 2021,
          genre: ["Animation", "Action", "Adventure"],
          href: "invincible",
        },
        {
          title: "Mind Hunter",
          description:
            "In the late 1970s, two FBI agents broaden the realm of criminal science by investigating the psychology behind murder and end up getting too close to real-life monsters.",
          isWatched: true,
          poster: "/images/mindhunter.png",
          type: "show",
          year: 2017,
          genre: ["Crime", "Drama", "Mystery"],
          href: "mindhunter",
        },
        {
          title: "The Last of Us",
          description:
            "After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity's last hope.",
          isWatched: true,
          poster: "/images/thelastofus.png",
          type: "show",
          year: 2023,
          genre: ["Action", "Drama", "Adventure"],
          href: "thelastofus",
        },
        {
          title: "The Office",
          description:
            "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, tedium and romance.",
          isWatched: true,
          poster: "/images/theoffice.png",
          type: "show",
          year: 2005,
          genre: ["Comedy"],
          href: "theoffice",
        },
        {
          title: "True Detective",
          description:
            "Anthology series in which police investigations unearth the personal and professional secrets of those involved, both within and outside the law.",
          isWatched: true,
          poster: "/images/truedetective.png",
          type: "show",
          year: 2005,
          genre: ["Crime", "Drama", "Mystery"],
          href: "truedetective",
        },
      ])
      .returning({ id: schema.shows.id });

    const showIds = shows.map((show) => show.id);

    // Insert lists and capture inserted IDs
    const lists = await db
      .insert(schema.lists)
      .values([
        {
          name: "Sci-fi Favorites",
          description: "A list of favorite sci-fi movies and shows",
        },
        {
          name: "Drama Favorites",
          description: "Movies and shows watched recently",
        },
      ])
      .returning({ id: schema.lists.id });

    const listIds = lists.map((list) => list.id);

    await db.insert(schema.listItems).values([
      { listId: listIds[0], movieId: movieIds[0], itemType: "movie" }, // The Man From Earth
      { listId: listIds[0], movieId: movieIds[2], itemType: "movie" }, // Dune
      { listId: listIds[0], movieId: movieIds[12], itemType: "movie" }, // Coherence
      { listId: listIds[0], showId: showIds[0], itemType: "show" }, // Chernobyl
      { listId: listIds[0], showId: showIds[2], itemType: "show" }, // Chernobyl

      { listId: listIds[1], movieId: movieIds[3], itemType: "movie" }, // Coherence
      { listId: listIds[1], movieId: movieIds[4], itemType: "movie" }, // Coherence
      { listId: listIds[1], movieId: movieIds[5], itemType: "movie" }, // Coherence
      { listId: listIds[1], movieId: movieIds[10], itemType: "movie" }, // Coherence
      { listId: listIds[1], showId: showIds[1], itemType: "show" }, // Chernobyl
      { listId: listIds[1], showId: showIds[3], itemType: "show" }, // Game of Thrones
      { listId: listIds[1], showId: showIds[5], itemType: "show" }, // Game of Thrones
      { listId: listIds[1], showId: showIds[7], itemType: "show" }, // Game of Thrones
    ]);

    console.log("Seeding finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed the database");
  }
};

main();

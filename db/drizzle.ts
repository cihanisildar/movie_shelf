import "dotenv/config";

import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema"; // Import the schema

const connectionString = process.env.DATABASE_URL;

export const client = postgres(connectionString!, {
  connect_timeout: 30, // timeout in seconds
  max_lifetime: 60 * 60, // 1 hour in seconds
  idle_timeout: 10, // 10 seconds
});
export const db = drizzle(client, { schema }); // Pass the schema here

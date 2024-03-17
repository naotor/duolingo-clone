import type { NeonQueryFunction } from "@neondatabase/serverless";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

const sql: NeonQueryFunction<boolean, boolean> = neon(
  process.env.DATABASE_URL || "",
);

const db = drizzle(sql, { schema });

export { db };

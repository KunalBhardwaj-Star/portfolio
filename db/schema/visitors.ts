import { pgTable, uuid, timestamp } from "drizzle-orm/pg-core";

export const visitors = pgTable("visitors", {
    id: uuid("id").primaryKey().defaultRandom(),
    visitedAt: timestamp("visited_at").defaultNow(),
});
import { pgTable, uuid, varchar, text, integer, timestamp } from "drizzle-orm/pg-core";

export const reviews = pgTable("reviews", {
    id: uuid("id").primaryKey().defaultRandom(),
    name: varchar("name", { length: 255 }).notNull(),
    email: varchar("email", { length: 255 }).notNull(),
    reviewText: text("review_text").notNull(),
    sentiment: varchar("sentiment", { length: 255 }),
    summary: text("summary"),
    rating: integer("rating"),
    reviewedAt: timestamp("reviewed_at").defaultNow(),
});
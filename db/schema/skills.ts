import {
    pgTable,
    uuid,
    varchar,
    timestamp,
} from "drizzle-orm/pg-core";

export const skills = pgTable("skills", {
    id: uuid("id").primaryKey().defaultRandom(),
    name: varchar("name", { length: 255 }).notNull(),
    category: varchar("category", { length: 255 }),
    proficiencyLevel: varchar("proficiency_level", { length: 255 }),
    createdAt: timestamp("created_at").defaultNow(),
});
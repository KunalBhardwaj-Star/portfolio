import { pgTable, uuid, varchar, text, timestamp } from "drizzle-orm/pg-core";

export const contactMsg = pgTable("contact_msg", {
    id: uuid("id").primaryKey().defaultRandom(),
    name: varchar("name", { length: 255 }).notNull(),
    email: varchar("email", { length: 255 }).notNull(),
    message: text("message").notNull(),
    createdAt: timestamp("created_at").defaultNow(),
});
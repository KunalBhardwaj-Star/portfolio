import {
    pgTable,
    uuid,
    varchar,
    date,
    text,
    timestamp,
} from "drizzle-orm/pg-core";

export const certificates = pgTable("certificates", {
    id: uuid("id").primaryKey().defaultRandom(),
    title: varchar("title", { length: 255 }).notNull(),
    issuer: varchar("issuer", { length: 255 }).notNull(),
    issueDate: date("issue_date").notNull(),
    certificateUrl: text("certificate_url"),
    createdAt: timestamp("created_at").defaultNow(),
});
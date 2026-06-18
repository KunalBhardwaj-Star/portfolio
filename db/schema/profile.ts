import {
    pgTable,
    uuid,
    varchar,
    text,
    timestamp,
} from "drizzle-orm/pg-core";

export const profiles = pgTable("profiles", {
    id: uuid("id").primaryKey().defaultRandom(),

    name: varchar("name", { length: 255 }).notNull(),

    email: varchar("email", { length: 255 }).notNull(),

    about: text("about"),

    githubUrl: text("github_url"),

    linkedinUrl: text("linkedin_url"),

    leetcodeUrl: text("leetcode_url"),

    resumeUrl: text("resume_url"),

    profileImageUrl: text("profile_image_url"),

    createdAt: timestamp("created_at").defaultNow(),

    updatedAt: timestamp("updated_at").defaultNow(),
});
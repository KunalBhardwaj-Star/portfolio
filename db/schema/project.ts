// id UUID PRIMARY KEY
// title VARCHAR(255)
// description TEXT

// github_url TEXT
// live_url TEXT
// image_url TEXT

// tech_stack TEXT[]
// featured TEXT

// created_at TIMESTAMP
// updated_at TIMESTAMP

import {
    pgTable,
    uuid,
    varchar,
    text,
    timestamp,
    boolean,
} from "drizzle-orm/pg-core";

export const projects = pgTable("projects", {
    id: uuid("id").primaryKey().defaultRandom(),

    title: varchar("title", { length: 255 }).notNull(),

    description: text("description"),

    githubUrl: text("github_url"),

    liveUrl: text("live_url"),

    imageUrl: text("image_url"),

    techStack: text("tech_stack").array(),

    featured: boolean("featured").default(false),

    createdAt: timestamp("created_at").defaultNow(),

    updatedAt: timestamp("updated_at").defaultNow(),
});
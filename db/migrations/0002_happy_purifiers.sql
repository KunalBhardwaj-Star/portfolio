CREATE TABLE "skills" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"category" varchar(255),
	"proficiency_level" varchar(255),
	"created_at" timestamp DEFAULT now()
);

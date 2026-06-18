### Database using TypeScript & PostgreSQL

## Order of model connectivity
    TypeScript Model
        ↓
    Drizzle Schema
        ↓
    Migration
        ↓
    Supabase PostgreSQL

## Migration

    Schema
    ↓
    Migration
    ↓
    SQL

## PostgreSQL
    > Migration runs against Supabase

    profiles
    ----------------
    id
    name
    email
    about
    github_url

## Complete flow 
    You Think
    ↓
    Model

    You Describe
    ↓
    Drizzle Schema

    Drizzle Translates
    ↓
    Migration (SQL)

    PostgreSQL Executes
    ↓
    Database Table

## How Postgre column entries become Drizzle ?
  Ex-
    UUID
    ↓
    uuid()

    VARCHAR
    ↓
    varchar()

    TEXT
    ↓
    text()

    TIMESTAMP
    ↓
    timestamp()

    BOOLEAN
    ↓
    boolean()

## Note - "A Drizzle schema is just a TypeScript representation of a PostgreSQL table."

## drizzle.config.ts

Purpose:
- Tell Drizzle where schemas are located
- Tell Drizzle where migrations should be generated
- Tell Drizzle which database to connect to

Drizzle asks:
1. Where are schemas?
2. Where should migrations be stored?
3. Which database should be used?

Project Answers:
Schemas    → db/schema/*
Migrations → db/migrations
Database   → DATABASE_URL

## To create migration
    npx drizzle-kit generate

    You wrote TypeScript
            ↓
    Drizzle generated SQL
            ↓
    PostgreSQL understands SQL

    Profile Idea
        ↓
    Drizzle Schema
        ↓
    Migration
        ↓
    SQL Generated
import postgres from "postgres";
import "dotenv/config";

const sql = postgres(process.env.DATABASE_URL);

async function main() {
  const result = await sql`SELECT current_database() AS db, version() AS version`;
  console.log(result);
  await sql.end();
}

main().catch(console.error);
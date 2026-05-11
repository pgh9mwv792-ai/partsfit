const fs = require("fs");
const path = require("path");

const SUPABASE_URL = "https://kcyczipsttklbmcoirxo.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjeWN6aXBzdHRrbGJtY29pcnhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgyNTc0NjksImV4cCI6MjA5MzgzMzQ2OX0.FS55EaDFuIi0wgMIv50Am9UrxXX4TFf1NMgUsCztko0";

const SQL_FILES = [
  "toyota_oil_filters_seed.sql",
  "honda_remaining_oil_filters_seed.sql",
  "chevrolet_oil_filters_seed.sql",
  "subaru_oil_filters_seed.sql",
  "nissan_oil_filters_seed.sql",
  "bmw_oil_filters_seed.sql",
];

function parseSqlFile(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const rows = [];

  // Match each VALUES row: (...),  or (...);
  const rowRegex = /\((\d+),\s*'([^']+)',\s*'([^']+)',\s*'([^']+)',\s*'([^']+)',\s*'([^']+)',\s*'([^']+)',\s*'([^']*)'\)/g;
  let match;
  while ((match = rowRegex.exec(content)) !== null) {
    rows.push({
      year: parseInt(match[1]),
      make: match[2],
      model: match[3],
      part_type: match[4],
      part_number: match[5],
      brand: match[6],
      engine: match[7],
      notes: match[8],
    });
  }
  return rows;
}

async function insertBatch(rows) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/Parts`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(rows),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`HTTP ${res.status}: ${text}`);
  }
}

async function main() {
  let totalInserted = 0;

  for (const fileName of SQL_FILES) {
    const filePath = path.join(__dirname, fileName);
    const rows = parseSqlFile(filePath);
    console.log(`${fileName}: parsed ${rows.length} rows`);

    // Insert in batches of 100
    for (let i = 0; i < rows.length; i += 100) {
      const batch = rows.slice(i, i + 100);
      await insertBatch(batch);
      process.stdout.write(`  inserted ${Math.min(i + 100, rows.length)}/${rows.length}\r`);
    }
    console.log(`  ✓ ${rows.length} rows inserted`);
    totalInserted += rows.length;
  }

  console.log(`\nDone! Total rows inserted: ${totalInserted}`);
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});

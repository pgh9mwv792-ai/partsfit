// Patch + seed script for 2002 Honda Civic
// 1. Fix the incorrect K20A3 timing chain note (remove wrong D17 claim)
// 2. Add correct D17 timing belt + tensioner parts
// 3. Add SLW manual transmission seals & bearings
// 4. Add BMXA/SLXA automatic transmission seals & ATF filter
// Run: node seed_civic_2002_patch.js

const SUPABASE_URL = "https://kcyczipsttklbmcoirxo.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjeWN6aXBzdHRrbGJtY29pcnhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgyNTc0NjksImV4cCI6MjA5MzgzMzQ2OX0.FS55EaDFuIi0wgMIv50Am9UrxXX4TFf1NMgUsCztko0";

const headers = {
  apikey: SUPABASE_KEY,
  Authorization: `Bearer ${SUPABASE_KEY}`,
  "Content-Type": "application/json",
};

// ── Step 1: Fix the K20A3 timing chain notes (remove the wrong D17 claim) ────
async function patchTimingChainNote() {
  const url =
    `${SUPABASE_URL}/rest/v1/Parts` +
    `?year=eq.2002&make=eq.Honda&model=eq.Civic&part_type=eq.Timing%20chain`;
  const res = await fetch(url, {
    method: "PATCH",
    headers: { ...headers, Prefer: "return=minimal" },
    body: JSON.stringify({
      notes: "K20A3 Si hatchback only. Replace if stretched or rattling on cold startup.",
    }),
  });
  if (!res.ok) throw new Error(`PATCH timing chain: HTTP ${res.status} — ${await res.text()}`);
  console.log("  ✓ Fixed K20A3 timing chain notes");
}

// ── Step 2: New parts to insert ───────────────────────────────────────────────
const NEW_PARTS = [
  // ─── TIMING BELT SYSTEM (D17A1/A2/A6/A7) ───────────────────────────────────
  // D17 is an INTERFERENCE engine — broken belt = engine damage. Service: 105k mi / 7 years.
  {
    part_type: "Timing belt",
    part_number: "14400-PMM-A02",
    brand: "Honda",
    engine: "1.7L I4 D17A1/A2/A6/A7",
    notes:
      "INTERFERENCE ENGINE — replace at 105,000 mi or 7 years. D17 uses a timing belt (NOT a chain). Failure causes valve-piston contact and engine damage.",
  },
  {
    part_type: "Timing belt tensioner",
    part_number: "14520-PLC-335",
    brand: "Honda",
    engine: "1.7L I4 D17A1/A2/A6/A7",
    notes:
      "Full tensioner set (arm + pulley). Always replace with the belt. Includes auto-tensioner assembly.",
  },
  {
    part_type: "Timing belt tensioner",
    part_number: "14517-PLC-013",
    brand: "Honda",
    engine: "1.7L I4 D17A1/A2/A6/A7",
    notes:
      "Tensioner bolt A (adjuster bolt, 54mm). Replace with tensioner set. Supersedes 14517-PLC-003 and 14517-PMM-A01.",
  },

  // ─── MANUAL TRANSMISSION — SLW 5-speed (2001-2005 D17 Civic) ──────────────
  // IMPORTANT: The 7th-gen Civic uses the SLW trans, NOT the S40 (1992-2000).
  // BK499 (USA Standard / Transtar) is the full aftermarket rebuild kit covering all below.
  {
    part_type: "Trans input shaft seal",
    part_number: "91216-PL3-005",
    brand: "Honda",
    engine: "1.7L I4 D17 — Manual trans (SLW)",
    notes:
      "Manual transmission input shaft seal (26×42×7), clutch side. SLW 5-speed. Included in BK499 rebuild kit.",
  },
  {
    part_type: "Axle seal (driver)",
    part_number: "91205-PL3-B01",
    brand: "Honda",
    engine: "1.7L I4 D17 — Manual trans (SLW)",
    notes:
      "Driver/left output axle seal (40×56×8). SLW manual trans. Included in BK499 rebuild kit.",
  },
  {
    part_type: "Axle seal (passenger)",
    part_number: "91206-PHR-003",
    brand: "Honda",
    engine: "1.7L I4 D17 — Manual trans (SLW)",
    notes:
      "Passenger/right output axle seal (35×58×8). SLW manual trans. Same part number used on BMXA/SLXA automatic.",
  },
  {
    part_type: "Trans input shaft bearing",
    part_number: "91001-PPP-005",
    brand: "Honda",
    engine: "1.7L I4 D17 — Manual trans (SLW)",
    notes:
      "Front input/mainshaft bearing (28×64×15), case side. SLW 5-speed. Included in BK499 rebuild kit.",
  },
  {
    part_type: "Trans input shaft bearing",
    part_number: "91002-PS0-013",
    brand: "Honda",
    engine: "1.7L I4 D17 — Manual trans (SLW)",
    notes:
      "Rear input shaft bearing, clutch housing side. SLW 5-speed. Most commonly failed bearing on SLW. Included in BK499.",
  },
  {
    part_type: "Valve cover gasket", // reusing closest type — this is case sealant
    part_number: "08718-0001",
    brand: "Honda",
    engine: "1.7L I4 D17 — Manual trans (SLW)",
    notes:
      "Honda Bond liquid gasket (Three Bond 1215 equivalent). Used on SLW case halves — no paper gasket. Also used on engine valve covers and oil pan.",
  },

  // ─── AUTOMATIC TRANSMISSION — BMXA / SLXA 4-speed (2001-2005 D17 Civic) ───
  {
    part_type: "Trans torque converter seal",
    part_number: "91207-P0X-003",
    brand: "Honda",
    engine: "1.7L I4 D17 — Auto trans (BMXA/SLXA)",
    notes:
      "Oil pump / torque converter seal (44×68×8). BMXA and SLXA 4-speed automatic. Leaks show as fluid at bellhousing.",
  },
  {
    part_type: "Axle seal (driver)",
    part_number: "91205-P0X-005",
    brand: "Honda",
    engine: "1.7L I4 D17 — Auto trans (BMXA/SLXA)",
    notes:
      "Driver/left output axle seal (40×56×9). BMXA/SLXA 4-speed automatic.",
  },
  {
    part_type: "Axle seal (passenger)",
    part_number: "91206-PHR-003",
    brand: "Honda",
    engine: "1.7L I4 D17 — Auto trans (BMXA/SLXA)",
    notes:
      "Passenger/right output axle seal (35×58×8). BMXA/SLXA 4-speed. Same part as SLW manual trans passenger seal.",
  },
  {
    part_type: "ATF filter",
    part_number: "25430-PLR-003",
    brand: "Honda",
    engine: "1.7L I4 D17 — Auto trans (BMXA/SLXA)",
    notes:
      "ATF strainer/filter. BMXA and SLXA 4-speed automatic. Replace at every ATF service. Wide Honda fitment (Civic, Accord, CR-V, Fit, Odyssey, Pilot).",
  },
];

async function insertBatch(rows) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/Parts`, {
    method: "POST",
    headers: { ...headers, Prefer: "return=minimal" },
    body: JSON.stringify(rows),
  });
  if (!res.ok) throw new Error(`INSERT: HTTP ${res.status} — ${await res.text()}`);
}

async function main() {
  console.log("Step 1: Fixing K20A3 timing chain notes…");
  await patchTimingChainNote();

  console.log("Step 2: Inserting timing belt, transmission seals & bearings…");
  const rows = NEW_PARTS.map((p) => ({ year: 2002, make: "Honda", model: "Civic", ...p }));
  await insertBatch(rows);
  console.log(`  ✓ Inserted ${rows.length} parts`);

  console.log("\nDone! New parts added:");
  const types = [...new Set(rows.map((r) => r.part_type))].sort();
  types.forEach((t) => {
    const count = rows.filter((r) => r.part_type === t).length;
    console.log(`  · ${t}${count > 1 ? ` (${count} entries)` : ""}`);
  });
  console.log(`\nTotal new records in DB: ${rows.length}`);
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});

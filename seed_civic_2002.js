// Seed script: 2002 Honda Civic — comprehensive OEM parts
// All part numbers verified against HondaPartsNow, OEM Parts Online, Honda Parts Connection
// Run: node seed_civic_2002.js

const SUPABASE_URL = "https://kcyczipsttklbmcoirxo.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjeWN6aXBzdHRrbGJtY29pcnhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgyNTc0NjksImV4cCI6MjA5MzgzMzQ2OX0.FS55EaDFuIi0wgMIv50Am9UrxXX4TFf1NMgUsCztko0";

// ─── Notes on 2002 Honda Civic 7th Gen ────────────────────────────────────────
// Engines:
//   D17A1 — 1.7L SOHC (DX, LX) | D17A2 — 1.7L SOHC VTEC (EX)
//   D17A6 — 1.7L SOHC VTEC-E (HX) | D17A7 — 1.7L SOHC CNG (GX)
//   K20A3 — 2.0L DOHC i-VTEC (Si hatchback)
// Ignition: Coil-on-Plug on ALL engines — no distributor cap/rotor
// Timing: Timing CHAIN on all engines — NO timing belt
// Belts: D17 uses two V-belts (alternator/PS + A/C), not a single serpentine
// Brakes: DX/LX/EX/HX/GX = front disc + rear drum; Si = all-disc
// Power steering: D17 = hydraulic; K20A3 Si = electric (no pump to replace)
// Fuel: returnless in-tank system — no inline serviceable fuel filter

const PARTS = [
  // ── MAINTENANCE FILTERS ──────────────────────────────────────────────────────
  {
    part_type: "Oil filter",
    part_number: "15400-PLM-A02",
    brand: "Honda",
    engine: "All (D17A1/A2/A6/A7 & K20A3)",
    notes: "OEM Honda spin-on filter. Fits all 2002 Civic engines.",
  },
  {
    part_type: "Air filter",
    part_number: "17220-PLC-000",
    brand: "Honda",
    engine: "1.7L I4 D17A1/A2/A6/A7",
    notes: "DX/LX/EX/HX/GX trims. Si uses a separate airbox — VIN lookup recommended.",
  },
  {
    part_type: "Cabin air filter",
    part_number: "80292-S5D-A01",
    brand: "Honda",
    engine: "All (D17 & K20A3)",
    notes: "Supersedes 80292-S5A-003. All 2002 Civic trims with A/C.",
  },
  {
    part_type: "Oil drain plug washer",
    part_number: "94109-14000",
    brand: "Honda",
    engine: "All (D17 & K20A3)",
    notes: "14mm crush washer. Replace every oil change.",
  },
  {
    part_type: "PCV valve",
    part_number: "17130-PLM-A01",
    brand: "Honda",
    engine: "1.7L I4 D17A1/A2/A6/A7",
    notes: "All D17 engines. Replace every 30k mi or when cracked/restricted.",
  },

  // ── FUEL SYSTEM ──────────────────────────────────────────────────────────────
  {
    part_type: "Fuel pump",
    part_number: "17045-S5A-A30",
    brand: "Honda",
    engine: "All (D17 & K20A3)",
    notes: "In-tank fuel pump assembly. Filter integrated — no separate inline filter on 7th gen. Supersedes A00, A31.",
  },
  {
    part_type: "Fuel injectors",
    part_number: "16450-PLC-003",
    brand: "Honda",
    engine: "1.7L I4 D17A1/A6 (DX, LX, HX)",
    notes: "DX, LX, HX trims. Need qty 4. EX uses 16450-PLD-003.",
  },
  {
    part_type: "Fuel injectors",
    part_number: "16450-PLD-003",
    brand: "Honda",
    engine: "1.7L I4 D17A2 (EX)",
    notes: "EX trim only (VTEC). Need qty 4.",
  },
  {
    part_type: "IAC valve",
    part_number: "16022-PLC-003",
    brand: "Honda",
    engine: "1.7L I4 D17 — Manual trans",
    notes: "Rotary air control valve. Manual transmission models. Auto trans uses 16022-PLC-J01.",
  },
  {
    part_type: "IAC valve",
    part_number: "16022-PLC-J01",
    brand: "Honda",
    engine: "1.7L I4 D17 — Auto trans",
    notes: "Automatic/CVT transmission models. Manual trans uses 16022-PLC-003.",
  },
  {
    part_type: "EVAP purge solenoid",
    part_number: "36162-PLC-003",
    brand: "Honda",
    engine: "1.7L I4 D17A1/A2/A6/A7",
    notes: "Canister control valve (purge solenoid). All D17 engines.",
  },
  {
    part_type: "EGR valve",
    part_number: "18011-PLM-A01",
    brand: "Honda",
    engine: "1.7L I4 D17A1/A2/A6/A7",
    notes: "All D17 trims including DX/LX have EGR. Clean or replace if P0401/P0404 code.",
  },

  // ── IGNITION (coil-on-plug — no distributor) ──────────────────────────────
  {
    part_type: "Ignition coil",
    part_number: "30520-PVJ-A01",
    brand: "Honda",
    engine: "1.7L I4 D17A1/A2/A6/A7",
    notes: "Coil-on-plug. Need qty 4. Supersedes 30520-PGK-A01 and 30520-PVF-A01.",
  },

  // ── SPARK PLUGS ───────────────────────────────────────────────────────────
  {
    part_type: "Spark plugs",
    part_number: "12290-PGE-A01",
    brand: "Honda",
    engine: "1.7L I4 D17A1/A2/A6/A7",
    notes: "All D17 engines. NGK PZFR6F-11 equivalent. Need qty 4. Replace every 30k mi.",
  },
  {
    part_type: "Spark plugs",
    part_number: "12290-PNA-A01",
    brand: "Honda",
    engine: "2.0L I4 K20A3 (Si)",
    notes: "Si hatchback only. NGK IZFR6K11 iridium equivalent. Need qty 4.",
  },

  // ── COOLING SYSTEM ────────────────────────────────────────────────────────
  {
    part_type: "Thermostat",
    part_number: "19301-PLC-315",
    brand: "Honda",
    engine: "1.7L I4 D17A1/A2/A6/A7",
    notes: "Fuji Thompson. All D17 engines. Opens at 176°F / 80°C.",
  },
  {
    part_type: "Water pump",
    part_number: "19200-PLM-A01",
    brand: "Honda",
    engine: "1.7L I4 D17A1/A2/A6/A7",
    notes: "All D17 engines. Replace when leaking, noisy, or at timing chain service.",
  },
  {
    part_type: "Radiator cap",
    part_number: "19045-PAA-A01",
    brand: "Honda",
    engine: "All (D17 & K20A3)",
    notes: "13 psi. Fits all 2001-2005 Civic.",
  },
  {
    part_type: "Coolant temperature sensor",
    part_number: "37870-PLC-004",
    brand: "Honda",
    engine: "1.7L I4 D17A1/A2/A6/A7",
    notes: "All D17 engines. Controls gauge and ECT-related codes. 1/8 NPT.",
  },

  // ── SENSORS ───────────────────────────────────────────────────────────────
  {
    part_type: "O2 sensor (upstream)",
    part_number: "36531-PLM-A01",
    brand: "Honda",
    engine: "1.7L I4 D17A1 (DX, LX)",
    notes: "Upstream/air-fuel sensor, bank 1 sensor 1. DX and LX non-VTEC only.",
  },
  {
    part_type: "O2 sensor (upstream)",
    part_number: "36531-PLR-A01",
    brand: "Honda",
    engine: "1.7L I4 D17A2/A6 (EX, HX)",
    notes: "Upstream/air-fuel sensor. EX (VTEC) and HX (VTEC-E) trims.",
  },
  {
    part_type: "O2 sensor (downstream)",
    part_number: "36532-PLC-003",
    brand: "Honda",
    engine: "1.7L I4 D17A1/A2/A6/A7",
    notes: "Downstream/catalyst monitor sensor, bank 1 sensor 2. All D17 engines.",
  },
  {
    part_type: "MAP sensor",
    part_number: "37830-PGK-A01",
    brand: "Honda",
    engine: "1.7L I4 D17A1/A2/A6/A7",
    notes: "Manifold absolute pressure sensor. D17 uses MAP (not MAF). Common cause of P0107/P0108.",
  },
  {
    part_type: "Oil pressure switch",
    part_number: "37250-PHM-003",
    brand: "Honda",
    engine: "All (D17 & K20A3)",
    notes: "Main oil pressure warning switch. Illuminates oil light when pressure drops.",
  },
  {
    part_type: "Crankshaft position sensor",
    part_number: "37500-PLC-015",
    brand: "Honda",
    engine: "1.7L I4 D17A1/A2/A6/A7",
    notes: "All D17 engines. Causes no-start or misfire if failed. P0335/P0336 codes.",
  },
  {
    part_type: "Camshaft position sensor",
    part_number: "37840-PLC-000",
    brand: "Honda",
    engine: "1.7L I4 D17A1/A2/A6/A7",
    notes: "All D17 engines. P0340/P0341 codes.",
  },
  {
    part_type: "Knock sensor",
    part_number: "30530-PLE-004",
    brand: "Honda",
    engine: "1.7L I4 D17A1/A2/A6/A7",
    notes: "All D17 engines. Supersedes 30530-PLM-A01. P0325 code.",
  },
  {
    part_type: "Knock sensor",
    part_number: "30530-PPL-A01",
    brand: "Honda",
    engine: "2.0L I4 K20A3 (Si)",
    notes: "Si hatchback only. P0325/P0326 code.",
  },

  // ── ENGINE GASKETS & SEALS ────────────────────────────────────────────────
  {
    part_type: "Valve cover gasket",
    part_number: "12030-PLC-010",
    brand: "Honda",
    engine: "1.7L I4 D17A1/A2/A6/A7",
    notes: "Complete gasket set including spark plug tube seals. All D17 engines. Supersedes 12030-PLC-000.",
  },
  {
    part_type: "Valve cover gasket",
    part_number: "12341-RTA-000",
    brand: "Honda",
    engine: "2.0L I4 K20A3 (Si)",
    notes: "Si hatchback only.",
  },
  {
    part_type: "Head gasket",
    part_number: "12251-PLC-004",
    brand: "Honda",
    engine: "1.7L I4 D17A1/A2/A6/A7",
    notes: "All D17 engines. Confirm head is not warped before install.",
  },
  {
    part_type: "Front crankshaft seal",
    part_number: "91212-PLM-A01",
    brand: "Honda",
    engine: "1.7L I4 D17A1/A2/A6/A7",
    notes: "38x50x7mm. Front main seal behind crank pulley. All D17 engines.",
  },
  {
    part_type: "Camshaft seal",
    part_number: "91213-P2F-A01",
    brand: "Honda",
    engine: "1.7L I4 D17A1/A2/A6/A7",
    notes: "29x45x8mm. Also fits D/B/H series broadly 1984-2005.",
  },

  // ── BELTS & TIMING ────────────────────────────────────────────────────────
  {
    part_type: "Drive belt (alternator)",
    part_number: "56992-PLM-003",
    brand: "Honda",
    engine: "1.7L I4 D17A1/A2/A6/A7",
    notes: "Alternator + power steering V-belt. D17 uses two separate V-belts, not a serpentine. Inspect every 30k mi.",
  },
  {
    part_type: "Drive belt (A/C)",
    part_number: "38920-PLR-013",
    brand: "Honda",
    engine: "1.7L I4 D17A1/A2/A6/A7",
    notes: "A/C compressor V-belt (6PK986). D17 only. Inspect every 30k mi.",
  },
  {
    part_type: "Timing chain",
    part_number: "14401-PNA-004",
    brand: "Honda",
    engine: "2.0L I4 K20A3 (Si)",
    notes: "K20A3 Si only. D17 timing chain is lifetime — no scheduled replacement. Replace if stretched or rattling on startup.",
  },

  // ── BRAKES ───────────────────────────────────────────────────────────────
  {
    part_type: "Brake pads (front)",
    part_number: "45022-S5D-405",
    brand: "Honda",
    engine: "All (D17 & K20A3)",
    notes: "OEM front pads. All 2002 Civic trims have front disc brakes.",
  },
  {
    part_type: "Brake rotor (front)",
    part_number: "45251-S5D-A10",
    brand: "Honda",
    engine: "All (D17 & K20A3)",
    notes: "OEM front rotor. All 2002 Civic trims. Min thickness stamped on rotor.",
  },
  {
    part_type: "Brake shoes (rear)",
    part_number: "43153-S5A-A02",
    brand: "Honda",
    engine: "1.7L I4 D17 (DX/LX/EX/HX/GX)",
    notes: "Rear drum brake shoes. All D17 trims (DX/LX/EX/HX/GX). Si has rear discs.",
  },
  {
    part_type: "Brake drum (rear)",
    part_number: "42610-S5A-000",
    brand: "Honda",
    engine: "1.7L I4 D17 (DX/LX/EX/HX/GX)",
    notes: "Rear drum. All D17 trims. Check drum diameter at machining limit.",
  },
  {
    part_type: "Brake pads (rear)",
    part_number: "43022-S6D-E50",
    brand: "Honda",
    engine: "2.0L I4 K20A3 (Si)",
    notes: "Rear disc pads. Si hatchback only — all other 2002 trims use rear drums.",
  },
  {
    part_type: "Brake rotor (rear)",
    part_number: "42510-S5A-A00",
    brand: "Honda",
    engine: "2.0L I4 K20A3 (Si)",
    notes: "Rear disc rotor. Si hatchback only.",
  },

  // ── SUSPENSION & STEERING ────────────────────────────────────────────────
  {
    part_type: "Wheel bearing (front)",
    part_number: "44300-S5A-008",
    brand: "Honda",
    engine: "All (D17 & K20A3)",
    notes: "Front hub/bearing assembly. Both sides same part. Pressed into knuckle.",
  },
  {
    part_type: "Wheel bearing (rear)",
    part_number: "42200-S5A-008",
    brand: "Honda",
    engine: "All (D17 & K20A3)",
    notes: "Rear hub/bearing assembly. Both sides same part.",
  },
  {
    part_type: "Ball joint (lower)",
    part_number: "51220-S5A-305",
    brand: "Honda",
    engine: "All (D17 & K20A3)",
    notes: "Lower ball joint. Both sides same part. Qty 2 needed (one per side). Supersedes 51220-S5A-003.",
  },
  {
    part_type: "Tie rod end (outer)",
    part_number: "53541-S5A-003",
    brand: "Honda",
    engine: "All (D17 & K20A3)",
    notes: "Outer tie rod end. Both sides same part number. Qty 2 needed. Align after replacement.",
  },
  {
    part_type: "Sway bar end link",
    part_number: "51320-S5A-003",
    brand: "Honda",
    engine: "All (D17 & K20A3)",
    notes: "Front sway bar end link, right/passenger side. Left side: 51321-S5A-003.",
  },
  {
    part_type: "Strut mount bearing",
    part_number: "51726-S5A-004",
    brand: "Honda",
    engine: "All (D17 & K20A3)",
    notes: "Front upper strut mount bearing. Replace when turning causes grinding/clunk.",
  },

  // ── ELECTRICAL / DRIVETRAIN ───────────────────────────────────────────────
  {
    part_type: "Alternator",
    part_number: "31100-PLM-A01",
    brand: "Honda",
    engine: "1.7L I4 D17A1/A2/A6/A7",
    notes: "70A/12V OEM alternator. All D17 engines.",
  },
  {
    part_type: "Starter motor",
    part_number: "31200-PLM-A01",
    brand: "Honda",
    engine: "1.7L I4 D17A1/A2/A6/A7",
    notes: "OEM starter. All D17 engines. Confirm by VIN for trim-specific variants.",
  },
  {
    part_type: "Transmission fluid (manual)",
    part_number: "08798-9031",
    brand: "Honda",
    engine: "All — Manual transmission",
    notes: "Honda MTF (1 qt). Manual trans capacity: ~2.4 qt. Use Honda MTF only — ATF will damage synchros.",
  },
  {
    part_type: "Transmission fluid (automatic)",
    part_number: "08200-9008",
    brand: "Honda",
    engine: "All — Automatic transmission",
    notes: "Honda ATF-DW1 (1 qt). Replaces discontinued ATF-Z1 (08200-9001). Backward compatible. Capacity: ~2.5 qt service fill.",
  },
];

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
  const rows = PARTS.map((p) => ({ year: 2002, make: "Honda", model: "Civic", ...p }));
  console.log(`Inserting ${rows.length} parts for 2002 Honda Civic…`);

  for (let i = 0; i < rows.length; i += 50) {
    const batch = rows.slice(i, i + 50);
    await insertBatch(batch);
    console.log(`  inserted ${Math.min(i + 50, rows.length)}/${rows.length}`);
  }

  console.log(`\nDone! ${rows.length} OEM parts added for 2002 Honda Civic.`);
  console.log("\nPart types added:");
  const types = [...new Set(rows.map((r) => r.part_type))].sort();
  types.forEach((t) => console.log(`  · ${t}`));
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});

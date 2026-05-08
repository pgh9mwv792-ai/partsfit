import { useState } from "react";
import { supabase } from "./supabase";

const VEHICLES = {
  Toyota: ["Camry", "Corolla", "RAV4", "Tacoma", "Highlander"],
  Honda: ["Civic", "Accord", "CR-V", "Pilot", "Odyssey"],
  Ford: ["F-150", "Mustang", "Explorer", "Escape", "Focus"],
  Chevrolet: ["Silverado", "Malibu", "Equinox", "Camaro", "Traverse"],
  Subaru: ["Outback", "Forester", "Impreza", "WRX", "Crosstrek"],
  Nissan: ["Altima", "Rogue", "Sentra", "Frontier", "Pathfinder"],
  BMW: ["3 Series", "5 Series", "X3", "X5", "M3"],
};

const YEARS = Array.from({ length: 15 }, (_, i) => 2024 - i);

const PARTS = [
  "Brake pads (front)",
  "Brake pads (rear)",
  "Air filter",
  "Oil filter",
  "Spark plugs",
  "Cabin air filter",
  "Timing belt",
  "Water pump",
  "Serpentine belt",
  "Thermostat",
  "Alternator",
  "Starter motor",
  "Radiator",
];

export default function App() {
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [trim, setTrim] = useState("");
  const [part, setPart] = useState("");
  const [searched, setSearched] = useState(false);
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [partData, setPartData] = useState(null);

  const makes = Object.keys(VEHICLES);
  const models = make ? VEHICLES[make] : [];
  const canSearch = year && make && model && part;

  async function handleSearch() {
    if (!canSearch) return;
    setLoading(true);
    setSearched(false);
    setPartData(null);
    setVerified(false);

    const { data, error } = await supabase
      .from("Parts")
      .select("*")
      .eq("year", year)
      .eq("make", make)
      .eq("model", model)
      .ilike("part_type", part)
      .limit(1);

    setLoading(false);
    setSearched(true);
    if (!error && data && data.length > 0) {
      setPartData(data[0]);
    } else {
      setPartData(null);
    }
  }

  function handleReset() {
    setYear("");
    setMake("");
    setModel("");
    setTrim("");
    setPart("");
    setSearched(false);
    setVerified(false);
    setPartData(null);
  }

  async function handleVerify(result) {
    const { error } = await supabase
      .from("verifications")
      .insert([{ year, make, model, part, result }]);
    if (error) {
      alert("Something went wrong, try again.");
    } else {
      setVerified(true);
    }
  }

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        <div style={styles.header}>
          <h1 style={styles.title}>🔧 PartsFit</h1>
          <p style={styles.subtitle}>Check if a part fits your car before you buy</p>
        </div>

        {!searched && !loading && (
          <div style={styles.card}>
            <p style={styles.cardTitle}>Your vehicle</p>
            <div style={styles.row}>
              <div style={styles.field}>
                <label style={styles.label}>Year</label>
                <select style={styles.select} value={year} onChange={e => setYear(e.target.value)}>
                  <option value="">Year</option>
                  {YEARS.map(y => <option key={y} value={y}>{y}</option>)}
                </select>
              </div>
              <div style={styles.field}>
                <label style={styles.label}>Make</label>
                <select style={styles.select} value={make} onChange={e => { setMake(e.target.value); setModel(""); }}>
                  <option value="">Make</option>
                  {makes.map(m => <option key={m} value={m}>{m}</option>)}
                </select>
              </div>
              <div style={styles.field}>
                <label style={styles.label}>Model</label>
                <select style={styles.select} value={model} onChange={e => setModel(e.target.value)} disabled={!make}>
                  <option value="">Model</option>
                  {models.map(m => <option key={m} value={m}>{m}</option>)}
                </select>
              </div>
            </div>
            <div style={styles.row2}>
              <div style={styles.field}>
                <label style={styles.label}>Trim (optional)</label>
                <input
                  style={styles.input}
                  type="text"
                  placeholder="e.g. EX, LX, Sport"
                  value={trim}
                  onChange={e => setTrim(e.target.value)}
                />
              </div>
              <div style={styles.field}>
                <label style={styles.label}>Part you need</label>
                <select style={styles.select} value={part} onChange={e => setPart(e.target.value)}>
                  <option value="">Select part</option>
                  {PARTS.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>
            </div>
            <button
              style={{ ...styles.button, opacity: canSearch ? 1 : 0.4 }}
              onClick={handleSearch}
              disabled={!canSearch}
            >
              Check fitment
            </button>
          </div>
        )}

        {loading && (
          <div style={{ ...styles.card, textAlign: "center", padding: "2rem" }}>
            <p style={{ fontSize: "15px", color: "#666" }}>Looking up parts...</p>
          </div>
        )}

        {searched && (
          <div>
            {partData ? (
              <div style={{ ...styles.card, ...styles.resultCard }}>
                <div style={styles.fitBadge}>✅ Found a match for your {year} {make} {model}</div>
                <div style={styles.partGrid}>
                  <div style={styles.infoBox}>
                    <p style={styles.infoLabel}>Part type</p>
                    <p style={styles.infoValue}>{partData.part_type}</p>
                  </div>
                  <div style={styles.infoBox}>
                    <p style={styles.infoLabel}>Part number</p>
                    <p style={styles.infoValue}>{partData.part_number}</p>
                  </div>
                  <div style={styles.infoBox}>
                    <p style={styles.infoLabel}>Brand</p>
                    <p style={styles.infoValue}>{partData.brand}</p>
                  </div>
                  <div style={styles.infoBox}>
                    <p style={styles.infoLabel}>Engine</p>
                    <p style={styles.infoValue}>{partData.engine}</p>
                  </div>
                </div>
                {partData.notes && (
                  <p style={styles.note}>💡 {partData.notes}</p>
                )}
              </div>
            ) : (
              <div style={{ ...styles.card, borderLeft: "4px solid #f59e0b" }}>
                <p style={{ fontSize: "16px", fontWeight: "600", color: "#b45309", marginBottom: "8px" }}>
                  ⚠️ No verified data yet for this combination
                </p>
                <p style={{ fontSize: "14px", color: "#666", margin: 0 }}>
                  We don't have a confirmed part number for a {year} {make} {model} {part.toLowerCase()} yet. Check back as our database grows — or be the first to add it!
                </p>
              </div>
            )}

            {!verified ? (
              <div style={styles.card}>
                <p style={styles.cardTitle}>Did this part actually work?</p>
                <p style={styles.verifyText}>Help the next person out — takes 2 seconds.</p>
                <div style={styles.verifyRow}>
                  <button style={{ ...styles.verifyBtn, ...styles.verifyYes }} onClick={() => handleVerify("confirmed")}>✅ Confirmed fit</button>
                  <button style={{ ...styles.verifyBtn, ...styles.verifyNo }} onClick={() => handleVerify("didnt_fit")}>❌ Didn't fit</button>
                  <button style={{ ...styles.verifyBtn, ...styles.verifyMaybe }} onClick={() => handleVerify("fit_with_mods")}>⚠️ Fit with mods</button>
                </div>
              </div>
            ) : (
              <div style={{ ...styles.card, textAlign: "center" }}>
                <p style={{ fontSize: "24px", margin: "0 0 8px" }}>🙌</p>
                <p style={{ fontSize: "15px", fontWeight: "500", color: "#111", margin: "0 0 4px" }}>Thanks for confirming!</p>
                <p style={{ fontSize: "14px", color: "#666", margin: 0 }}>You just helped the next person.</p>
              </div>
            )}

            <button style={styles.resetBtn} onClick={handleReset}>
              ← Search another part
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",
    padding: "2rem 1rem",
    fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
  },
  container: { maxWidth: "560px", margin: "0 auto" },
  header: { marginBottom: "1.5rem" },
  title: { fontSize: "24px", fontWeight: "600", margin: "0 0 4px", color: "#111" },
  subtitle: { fontSize: "15px", color: "#666", margin: 0 },
  card: {
    background: "#fff",
    borderRadius: "12px",
    padding: "1.25rem",
    marginBottom: "1rem",
    border: "1px solid #e5e5e5",
  },
  cardTitle: {
    fontSize: "13px", fontWeight: "600", color: "#888",
    textTransform: "uppercase", letterSpacing: "0.05em",
    marginBottom: "12px", marginTop: 0,
  },
  row: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px", marginBottom: "10px" },
  row2: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "10px" },
  field: { display: "flex", flexDirection: "column", gap: "4px" },
  label: { fontSize: "13px", color: "#555", fontWeight: "500" },
  select: {
    padding: "8px 10px", borderRadius: "8px", border: "1px solid #ddd",
    fontSize: "14px", backgroundColor: "#fff", color: "#111", width: "100%",
  },
  input: {
    padding: "8px 10px", borderRadius: "8px", border: "1px solid #ddd",
    fontSize: "14px", backgroundColor: "#fff", color: "#111", width: "100%",
  },
  button: {
    width: "100%", padding: "12px", backgroundColor: "#111", color: "#fff",
    border: "none", borderRadius: "8px", fontSize: "15px", fontWeight: "500",
    cursor: "pointer", marginTop: "4px",
  },
  resultCard: { borderLeft: "4px solid #22c55e" },
  fitBadge: { fontSize: "16px", fontWeight: "600", color: "#15803d", marginBottom: "12px" },
  partGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "12px" },
  infoBox: { backgroundColor: "#f9f9f9", borderRadius: "8px", padding: "10px 12px" },
  infoLabel: { fontSize: "12px", color: "#888", margin: "0 0 2px" },
  infoValue: { fontSize: "14px", fontWeight: "500", color: "#111", margin: 0 },
  note: {
    fontSize: "13px", color: "#666", backgroundColor: "#fffbeb",
    borderRadius: "8px", padding: "10px 12px", margin: 0,
  },
  verifyText: { fontSize: "14px", color: "#666", marginTop: 0, marginBottom: "12px" },
  verifyRow: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px" },
  verifyBtn: {
    padding: "10px 8px", borderRadius: "8px", border: "1px solid #ddd",
    fontSize: "13px", fontWeight: "500", cursor: "pointer", backgroundColor: "#fff",
  },
  verifyYes: { borderColor: "#22c55e", color: "#15803d" },
  verifyNo: { borderColor: "#ef4444", color: "#b91c1c" },
  verifyMaybe: { borderColor: "#f59e0b", color: "#b45309" },
  resetBtn: { background: "none", border: "none", color: "#555", fontSize: "14px", cursor: "pointer", padding: "4px 0" },
};
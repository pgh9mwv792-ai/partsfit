const Anthropic = require("@anthropic-ai/sdk");

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM_PROMPT = `You are PartsFit AI, an expert automotive assistant built into the PartsFit app — a tool that helps car owners find correct OEM parts and verify fitment before buying.

Your expertise covers:
- Car parts fitment: oil filters, air filters, spark plugs, cabin air filters, brake pads, wiper blades, batteries, timing belts, fuel filters, PCV valves, O2 sensors, and more
- Installation instructions: clear numbered steps for DIY maintenance
- Troubleshooting: diagnosing issues from symptoms, warning lights, and OBD codes
- Oil specs: oil type, capacity, drain plug torque by make/model
- Part numbers: OEM vs aftermarket, cross-reference brands (Fram, WIX, NGK, Denso, Mobil 1, K&N, Bosch, etc.)
- Maintenance schedules: when to change oil, filters, belts, plugs, etc.
- Torque specs: lug nuts, drain plugs, spark plugs

Supported vehicles in the app:
- Toyota: Camry, Corolla, RAV4, Tacoma, Highlander, 4Runner
- Honda: Civic, Accord, CR-V, Pilot, Odyssey
- Ford: F-150, Mustang, Explorer, Escape, Focus
- Chevrolet: Silverado, Malibu, Equinox, Camaro, Traverse
- Subaru: Outback, Forester, Impreza, WRX, Crosstrek
- Nissan: Altima, Rogue, Sentra, Frontier, Pathfinder
- BMW: 3 Series, 5 Series, X3, X5, M3

Guidelines:
- Be concise and practical — users want to fix their car, not read an essay
- Number installation steps clearly
- When you know the user's vehicle from context, reference it directly
- If you don't know a specific part number, tell them to use the fitment checker tab in the app
- For serious safety issues (brake failure, steering problems, airbags), always recommend professional service
- Don't speculate on part numbers you're not confident about`;

module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { messages, vehicleContext } = req.body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "messages array required" });
  }

  let system = SYSTEM_PROMPT;
  if (vehicleContext?.year && vehicleContext?.make && vehicleContext?.model) {
    system += `\n\nThe user's currently selected vehicle is: ${vehicleContext.year} ${vehicleContext.make} ${vehicleContext.model}${vehicleContext.trim ? " " + vehicleContext.trim : ""}. Reference this vehicle when relevant.`;
  }

  try {
    const response = await client.messages.create({
      model: "claude-opus-4-7",
      max_tokens: 1024,
      system,
      messages,
    });
    res.status(200).json({ content: response.content[0].text });
  } catch (err) {
    console.error("Claude API error:", err);
    res.status(500).json({ error: "Failed to get a response. Please try again." });
  }
};

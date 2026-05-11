import { useState, useRef, useEffect } from "react";

const SUGGESTED = [
  "How do I change my oil filter?",
  "What oil does my car take?",
  "How do I replace spark plugs?",
  "My check engine light is on",
];

export default function Chatbot({ year, make, model, trim }) {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi, I'm PartsFit AI. Ask me anything about your car's parts, repairs, or maintenance — I'll help you find the right part and walk you through the job.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  const hasVehicle = year && make && model;

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    setTimeout(() => inputRef.current?.focus(), 150);
  }, []);

  async function send(text) {
    const userText = (text || input).trim();
    if (!userText || loading) return;
    setInput("");
    setError("");
    const newMessages = [...messages, { role: "user", content: userText }];
    setMessages(newMessages);
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
          vehicleContext: hasVehicle ? { year, make, model, trim } : null,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Unknown error");
      setMessages((prev) => [...prev, { role: "assistant", content: data.content }]);
    } catch {
      setError("Couldn't reach the server. Check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  function handleKey(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  function clearChat() {
    setMessages([
      {
        role: "assistant",
        content:
          "Hi, I'm PartsFit AI. Ask me anything about your car's parts, repairs, or maintenance — I'll help you find the right part and walk you through the job.",
      },
    ]);
    setInput("");
    setError("");
  }

  const BoltIcon = () => (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );

  const UpArrow = () => (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="19" x2="12" y2="5" />
      <polyline points="5 12 12 5 19 12" />
    </svg>
  );

  return (
    <div style={cs.wrap}>
      {/* Header */}
      <div style={cs.header}>
        <div style={cs.headerLeft}>
          <div style={cs.avatar}>
            <BoltIcon />
          </div>
          <div>
            <p style={cs.headerTitle}>PartsFit AI</p>
            {hasVehicle && (
              <p style={cs.headerSub}>
                {year} {make} {model}
                {trim ? ` · ${trim}` : ""}
              </p>
            )}
          </div>
        </div>
        <button onClick={clearChat} style={cs.clearBtn}>
          New chat
        </button>
      </div>

      {/* Messages */}
      <div style={cs.messages}>
        {messages.map((m, i) =>
          m.role === "user" ? (
            <div key={i} style={cs.userRow}>
              <div style={cs.userBubble}>{m.content}</div>
            </div>
          ) : (
            <div key={i} style={cs.aiRow}>
              <div style={cs.avatarSm}>
                <BoltIcon />
              </div>
              <p style={cs.aiText}>
                {m.content.split("\n").map((line, j, arr) => (
                  <span key={j}>
                    {line}
                    {j < arr.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          )
        )}

        {loading && (
          <div style={cs.aiRow}>
            <div style={cs.avatarSm}>
              <BoltIcon />
            </div>
            <div style={cs.dots}>
              <span style={cs.dot} />
              <span style={{ ...cs.dot, animationDelay: "0.18s" }} />
              <span style={{ ...cs.dot, animationDelay: "0.36s" }} />
            </div>
          </div>
        )}

        {error && <p style={cs.error}>{error}</p>}

        {messages.length === 1 && !loading && (
          <div style={cs.suggs}>
            {SUGGESTED.map((s) => (
              <button key={s} style={cs.sugg} onClick={() => send(s)}>
                {s}
              </button>
            ))}
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div style={cs.inputWrap}>
        <div style={cs.inputBox}>
          <textarea
            ref={inputRef}
            style={cs.textarea}
            rows={1}
            placeholder={
              hasVehicle
                ? `Ask about your ${make} ${model}…`
                : "Ask a car parts question…"
            }
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            disabled={loading}
          />
          <button
            style={{ ...cs.sendBtn, opacity: input.trim() && !loading ? 1 : 0.3 }}
            onClick={() => send()}
            disabled={!input.trim() || loading}
          >
            <UpArrow />
          </button>
        </div>
        <p style={cs.disclaimer}>
          AI can make mistakes. Verify critical part numbers before ordering.
        </p>
      </div>

      <style>{`
        @keyframes chatbounce {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.3; }
          40% { transform: translateY(-5px); opacity: 1; }
        }
        .chatbot-textarea::placeholder { color: #3a3a52; }
      `}</style>
    </div>
  );
}

const cs = {
  wrap: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    backgroundColor: "#0d0d12",
    overflow: "hidden",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', sans-serif",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "13px 20px",
    borderBottom: "1px solid #1c1c28",
    backgroundColor: "#111118",
    flexShrink: 0,
  },
  headerLeft: { display: "flex", alignItems: "center", gap: "10px" },
  avatar: {
    width: "30px",
    height: "30px",
    borderRadius: "8px",
    background: "linear-gradient(135deg, #1e3a8a, #3b82f6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  avatarSm: {
    width: "24px",
    height: "24px",
    borderRadius: "6px",
    background: "linear-gradient(135deg, #1e3a8a, #3b82f6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    marginTop: "3px",
  },
  headerTitle: { margin: 0, color: "#e0e0ee", fontWeight: "600", fontSize: "14px" },
  headerSub: { margin: "2px 0 0", color: "#525268", fontSize: "11px" },
  clearBtn: {
    background: "none",
    border: "1px solid #22223a",
    color: "#52526a",
    borderRadius: "6px",
    padding: "5px 10px",
    fontSize: "12px",
    cursor: "pointer",
    fontFamily: "inherit",
    fontWeight: "500",
  },
  messages: {
    flex: 1,
    overflowY: "auto",
    padding: "22px 20px 10px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  userRow: { display: "flex", justifyContent: "flex-end" },
  userBubble: {
    maxWidth: "74%",
    backgroundColor: "#1d4ed8",
    color: "#fff",
    borderRadius: "16px 16px 4px 16px",
    padding: "10px 14px",
    fontSize: "14px",
    lineHeight: "1.55",
    wordBreak: "break-word",
  },
  aiRow: { display: "flex", alignItems: "flex-start", gap: "10px" },
  aiText: {
    flex: 1,
    margin: 0,
    fontSize: "14px",
    lineHeight: "1.75",
    color: "#c4c4dc",
    wordBreak: "break-word",
  },
  dots: { display: "flex", gap: "5px", alignItems: "center", paddingTop: "4px" },
  dot: {
    width: "7px",
    height: "7px",
    borderRadius: "50%",
    backgroundColor: "#3b82f6",
    display: "inline-block",
    animation: "chatbounce 1.2s infinite",
  },
  error: {
    fontSize: "13px",
    color: "#f87171",
    margin: 0,
    padding: "10px 14px",
    backgroundColor: "#1a0909",
    borderRadius: "8px",
    border: "1px solid #3a1010",
  },
  suggs: { display: "flex", flexDirection: "column", gap: "7px", marginTop: "4px" },
  sugg: {
    textAlign: "left",
    background: "none",
    border: "1px solid #1e1e30",
    borderRadius: "10px",
    padding: "10px 14px",
    fontSize: "13px",
    color: "#4f75e8",
    cursor: "pointer",
    fontFamily: "inherit",
    fontWeight: "500",
  },
  inputWrap: {
    padding: "12px 16px 16px",
    borderTop: "1px solid #1a1a28",
    backgroundColor: "#111118",
    flexShrink: 0,
  },
  inputBox: {
    display: "flex",
    gap: "8px",
    alignItems: "flex-end",
    backgroundColor: "#191924",
    border: "1px solid #252538",
    borderRadius: "14px",
    padding: "8px 8px 8px 14px",
  },
  textarea: {
    flex: 1,
    resize: "none",
    border: "none",
    background: "none",
    outline: "none",
    fontSize: "14px",
    fontFamily: "inherit",
    color: "#dcdcf0",
    lineHeight: "1.5",
    maxHeight: "120px",
    overflowY: "auto",
  },
  sendBtn: {
    width: "36px",
    height: "36px",
    borderRadius: "10px",
    background: "linear-gradient(135deg, #1e3a8a, #3b82f6)",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    transition: "opacity 0.15s",
  },
  disclaimer: {
    fontSize: "11px",
    color: "#2c2c40",
    margin: "8px 0 0",
    textAlign: "center",
    lineHeight: "1.4",
  },
};

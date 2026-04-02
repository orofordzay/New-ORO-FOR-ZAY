import { useState } from “react”;

// ─── CUSTOMIZE THIS SECTION ───────────────────────────────────────────────────
const SALESPERSON = {
name: “Isaiah Vannest”,
title: “Sales Consultant”,
phone: “(520) 300-1604”,
email: “ivannest@oroford.com”,
tagline: “Drive a Little, Save a Lot — Ask for Me Personally”,
dealership: “ORO Ford”,
location: “Oracle, AZ”,
address: “3950 W. State Highway 77, Oracle, AZ 85623”,
photo: null, // Replace with your photo URL e.g. “https://…”
};

// ─── ADD YOUR VEHICLES HERE ───────────────────────────────────────────────────
const VEHICLES = [
{
id: 1, year: 2025, make: “Ford”, model: “F-150 XLT”, trim: “SuperCrew 4x4”,
price: 54900, miles: 0, color: “Agate Black”, type: “new”, stock: “N1041”,
fuel: “Gas”, transmission: “Automatic”,
image: “https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80”,
features: [“Tow Package”, “Backup Camera”, “Heated Seats”, “SYNC 4”],
description: “Brand new 2025 F-150 with the 3.5L EcoBoost V6. Ready to work and ready to play.”,
},
{
id: 2, year: 2026, make: “Ford”, model: “Escape PHEV”, trim: “SE FWD”,
price: 38515, miles: 3, color: “Carbonized Gray Metallic”, type: “new”, stock: “N2036”,
fuel: “Plug-In Hybrid”, transmission: “Automatic”,
image: “https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=700&q=80”,
features: [“Apple CarPlay”, “Lane-Keeping Assist”, “Wireless Charging”, “Ford Co-Pilot360”],
description: “Save at the pump every day. The 2026 Escape PHEV offers impressive electric range plus full gas backup.”,
},
{
id: 3, year: 2024, make: “Ford”, model: “Bronco Sport”, trim: “Big Bend 4x4”,
price: 31900, miles: 14200, color: “Cactus Gray”, type: “used”, stock: “U0887”,
fuel: “Gas”, transmission: “Automatic”,
image: “https://images.unsplash.com/photo-1609752048517-08c8a5e97d76?w=700&q=80”,
features: [“Trail Control”, “Terrain Management”, “SYNC 3”, “Roof Rack”],
description: “Pre-owned Bronco Sport with low miles and a clean history. Perfect for Arizona trails.”,
},
{
id: 4, year: 2025, make: “Ford”, model: “Explorer ST-Line”, trim: “RWD”,
price: 47200, miles: 0, color: “Iconic Silver”, type: “new”, stock: “N3301”,
fuel: “Gas”, transmission: “Automatic”,
image: “https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=700&q=80”,
features: [“3-Row Seating”, “B&O Sound System”, “Panoramic Roof”, “Ford Co-Pilot360”],
description: “3 rows, premium style. The 2025 Explorer ST-Line is ready for any Arizona adventure.”,
},
{
id: 5, year: 2023, make: “Ford”, model: “Maverick XLT”, trim: “Hybrid FWD”,
price: 27400, miles: 22800, color: “Oxford White”, type: “used”, stock: “U1122”,
fuel: “Hybrid”, transmission: “CVT”,
image: “https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=700&q=80”,
features: [“FlexBed”, “SYNC 4”, “Ford Co-Pilot360”, “40+ MPG City”],
description: “The Maverick Hybrid is the most fuel-efficient truck in America. Pre-owned with solid history.”,
},
{
id: 6, year: 2025, make: “Ford”, model: “Ranger Lariat”, trim: “4x4 SuperCrew”,
price: 48700, miles: 0, color: “Rapid Red”, type: “new”, stock: “N4450”,
fuel: “Gas”, transmission: “Automatic”,
image: “https://images.unsplash.com/photo-1563720223185-11003d516935?w=700&q=80”,
features: [“Pro Power Onboard”, “Matrix LED Headlights”, “Tow Package”, “360-Degree Camera”],
description: “All-new Ranger with segment-first Pro Power Onboard. Take your power anywhere.”,
},
];
// ──────────────────────────────────────────────────────────────────────────────

const fmt = (n) => “$” + n.toLocaleString();

const FORD_BLUE = “#003087”;
const FORD_ACCENT = “#1476cc”;
const FORD_LIGHT = “#e8f0fb”;

function Badge({ type }) {
return (
<span style={{
background: type === “new” ? FORD_BLUE : “#1a1a2e”,
color: “#fff”,
fontSize: “0.6rem”, fontWeight: 800, letterSpacing: “0.15em”,
textTransform: “uppercase”, padding: “3px 10px”, borderRadius: “20px”,
border: type === “new” ? “none” : `1px solid ${FORD_ACCENT}`,
}}>
{type === “new” ? “✦ NEW” : “PRE-OWNED”}
</span>
);
}

function VehicleCard({ v, onClick }) {
const [hovered, setHovered] = useState(false);
return (
<div
onMouseEnter={() => setHovered(true)}
onMouseLeave={() => setHovered(false)}
onClick={() => onClick(v)}
style={{
background: “#fff”,
borderRadius: “12px”,
overflow: “hidden”,
cursor: “pointer”,
boxShadow: hovered
? “0 20px 60px rgba(0,48,135,0.18)”
: “0 2px 16px rgba(0,0,0,0.07)”,
border: `2px solid ${hovered ? FORD_ACCENT : "transparent"}`,
transition: “all 0.25s ease”,
transform: hovered ? “translateY(-6px)” : “none”,
}}
>
<div style={{ position: “relative”, height: 200, overflow: “hidden” }}>
<img
src={v.image} alt={`${v.year} ${v.make} ${v.model}`}
style={{
width: “100%”, height: “100%”, objectFit: “cover”,
transition: “transform 0.4s”,
transform: hovered ? “scale(1.07)” : “scale(1)”,
}}
/>
<div style={{ position: “absolute”, top: 12, left: 12 }}><Badge type={v.type} /></div>
{v.miles === 0 && (
<div style={{
position: “absolute”, top: 12, right: 12,
background: “#22c55e”, color: “#fff”,
fontSize: “0.6rem”, fontWeight: 800, letterSpacing: “0.1em”,
padding: “3px 8px”, borderRadius: “20px”,
}}>IN STOCK</div>
)}
</div>
<div style={{ padding: “18px 20px 22px” }}>
<div style={{ fontSize: “0.65rem”, color: “#999”, letterSpacing: “0.08em”, marginBottom: 4 }}>
STOCK #{v.stock} · {v.color}
</div>
<div style={{
fontFamily: “‘Barlow Condensed’, sans-serif”,
fontSize: “1.3rem”, color: “#111”, fontWeight: 700, marginBottom: 2, lineHeight: 1.1,
}}>
{v.year} {v.make} {v.model}
</div>
<div style={{ fontSize: “0.78rem”, color: “#666”, marginBottom: 14 }}>{v.trim}</div>
<div style={{ display: “flex”, justifyContent: “space-between”, alignItems: “center” }}>
<div style={{
fontFamily: “‘Barlow Condensed’, sans-serif”,
fontSize: “1.5rem”, color: FORD_BLUE, fontWeight: 800,
}}>{fmt(v.price)}</div>
<div style={{
fontSize: “0.72rem”, color: “#888”,
background: “#f5f5f5”, padding: “4px 10px”, borderRadius: “20px”,
}}>
{v.miles === 0 ? “0 miles” : `${v.miles.toLocaleString()} mi`}
</div>
</div>
<div style={{
marginTop: 14, display: “flex”, gap: 6, flexWrap: “wrap”,
}}>
{v.features.slice(0, 2).map(f => (
<span key={f} style={{
fontSize: “0.65rem”, background: FORD_LIGHT,
color: FORD_BLUE, padding: “3px 8px”, borderRadius: “4px”, fontWeight: 600,
}}>{f}</span>
))}
</div>
</div>
</div>
);
}

function Modal({ v, onClose, onInquire }) {
if (!v) return null;
return (
<div onClick={onClose} style={{
position: “fixed”, inset: 0, background: “rgba(0,10,30,0.75)”,
zIndex: 1000, display: “flex”, alignItems: “center”, justifyContent: “center”,
padding: 20, backdropFilter: “blur(6px)”,
}}>
<div onClick={e => e.stopPropagation()} style={{
background: “#fff”, borderRadius: “16px”,
maxWidth: 740, width: “100%”, maxHeight: “90vh”, overflowY: “auto”,
boxShadow: “0 40px 100px rgba(0,0,0,0.4)”,
}}>
<div style={{ position: “relative” }}>
<img src={v.image} alt=”” style={{ width: “100%”, height: 280, objectFit: “cover”, borderRadius: “16px 16px 0 0” }} />
<button onClick={onClose} style={{
position: “absolute”, top: 16, right: 16,
background: “rgba(0,0,0,0.5)”, color: “#fff”, border: “none”,
width: 36, height: 36, borderRadius: “50%”, fontSize: “1.1rem”,
cursor: “pointer”, display: “flex”, alignItems: “center”, justifyContent: “center”,
}}>✕</button>
</div>
<div style={{ padding: “28px 32px 36px” }}>
<div style={{ display: “flex”, justifyContent: “space-between”, alignItems: “flex-start”, flexWrap: “wrap”, gap: 12 }}>
<div>
<Badge type={v.type} />
<div style={{
fontFamily: “‘Barlow Condensed’, sans-serif”,
fontSize: “2rem”, color: “#111”, fontWeight: 800, marginTop: 8, lineHeight: 1,
}}>{v.year} {v.make} {v.model}</div>
<div style={{ color: “#777”, marginTop: 4 }}>{v.trim} · {v.color}</div>
</div>
<div style={{
fontFamily: “‘Barlow Condensed’, sans-serif”,
fontSize: “2.2rem”, color: FORD_BLUE, fontWeight: 800,
}}>{fmt(v.price)}</div>
</div>

```
      <p style={{ marginTop: 16, color: "#555", lineHeight: 1.6, fontSize: "0.92rem" }}>{v.description}</p>

      <div style={{
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
        gap: 12, margin: "22px 0", background: FORD_LIGHT, padding: 20, borderRadius: 10,
      }}>
        {[["Mileage", v.miles === 0 ? "Brand New" : `${v.miles.toLocaleString()} mi`],
          ["Fuel", v.fuel], ["Transmission", v.transmission], ["Stock #", v.stock]].map(([k, val]) => (
          <div key={k}>
            <div style={{ fontSize: "0.6rem", color: "#888", letterSpacing: "0.1em", textTransform: "uppercase" }}>{k}</div>
            <div style={{ color: FORD_BLUE, marginTop: 4, fontSize: "0.9rem", fontWeight: 700 }}>{val}</div>
          </div>
        ))}
      </div>

      <div style={{ marginBottom: 24 }}>
        <div style={{ fontSize: "0.65rem", color: "#999", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>Key Features</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {v.features.map(f => (
            <span key={f} style={{
              background: FORD_LIGHT, border: `1px solid #c5d8f0`,
              color: FORD_BLUE, fontSize: "0.8rem", padding: "6px 14px", borderRadius: "6px", fontWeight: 600,
            }}>{f}</span>
          ))}
        </div>
      </div>

      <button onClick={() => onInquire(v)} style={{
        width: "100%", background: FORD_BLUE, color: "#fff", border: "none",
        padding: "15px", fontWeight: 800, fontSize: "0.9rem",
        letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer",
        borderRadius: "8px", fontFamily: "'Barlow Condensed', sans-serif",
      }}>
        📞 Contact {SALESPERSON.name.split(" ")[0]} About This Vehicle
      </button>
    </div>
  </div>
</div>
```

);
}

function ContactSection({ prefill, onDone }) {
const [form, setForm] = useState({ name: “”, phone: “”, email: “”, message: prefill || “”, sent: false });
const set = (k, v) => setForm(f => ({ …f, [k]: v }));

if (form.sent) return (
<div style={{ textAlign: “center”, padding: “60px 20px” }}>
<div style={{ fontSize: “3rem”, marginBottom: 16 }}>🎉</div>
<div style={{
fontFamily: “‘Barlow Condensed’, sans-serif”,
fontSize: “2rem”, color: FORD_BLUE, fontWeight: 800,
}}>Message Sent!</div>
<div style={{ color: “#555”, marginTop: 8 }}>I’ll reach out within the hour. Talk soon!</div>
{onDone && <button onClick={onDone} style={{
marginTop: 24, background: FORD_BLUE, color: “#fff”, border: “none”,
padding: “10px 24px”, cursor: “pointer”, borderRadius: 8, fontWeight: 700,
}}>Back to Inventory</button>}
</div>
);

return (
<div style={{ display: “flex”, flexDirection: “column”, gap: 16, maxWidth: 540, margin: “0 auto” }}>
{[[“Your Name”, “name”, “text”], [“Phone Number”, “phone”, “tel”], [“Email Address”, “email”, “email”]].map(([label, key, type]) => (
<div key={key}>
<label style={{ fontSize: “0.7rem”, color: “#666”, letterSpacing: “0.08em”, textTransform: “uppercase”, display: “block”, marginBottom: 6, fontWeight: 600 }}>{label}</label>
<input type={type} value={form[key]} onChange={e => set(key, e.target.value)}
placeholder={label}
style={{
width: “100%”, background: “#f8faff”, border: `1.5px solid #d0dff5`,
color: “#111”, padding: “12px 16px”, borderRadius: “8px”, fontSize: “0.95rem”,
outline: “none”, boxSizing: “border-box”,
}} />
</div>
))}
<div>
<label style={{ fontSize: “0.7rem”, color: “#666”, letterSpacing: “0.08em”, textTransform: “uppercase”, display: “block”, marginBottom: 6, fontWeight: 600 }}>Message</label>
<textarea rows={4} value={form.message} onChange={e => set(“message”, e.target.value)}
placeholder=“Tell me what

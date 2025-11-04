// src/commons/skillsTable.jsx
import React, { useMemo, useState } from "react";
import HorizontalDropBox from "./horizontal-drop-box";

export default function SkillsTable({ skills, about, initial = "languages" }) {
  // allow calling with {skills} or {about}
  const source = skills ?? about?.skills ?? {};

  // Order and labels (only show categories that exist)
  const allCats = useMemo(
    () => ([
      { key: "languages",  label: "Programming Languages" },
      { key: "frameworks", label: "Frameworks" },
      { key: "web",        label: "Web Tech" },
      { key: "databases",  label: "Databases" },
      { key: "other_tools",label: "Other Tools" },
    ].filter(c => Array.isArray(source[c.key]) && source[c.key].length > 0)),
    [source]
  );

  const [cat, setCat] = useState(
    allCats.find(c => c.key === initial)?.key || (allCats[0]?.key ?? "languages")
  );

  const list = useMemo(
    () => (source[cat] || []).map(s => ({
      ...s,
      rating: typeof s.rating === "number" ? s.rating : 0,
    })),
    [source, cat]
  );

  return (
    <div>
      {allCats.length > 1 && (
        <HorizontalDropBox items={allCats} value={cat} onChange={setCat} compact />
      )}
      <Table list={list} />
    </div>
  );
}

/* ---------- presentational table ---------- */
function Table({ list }) {
const VISIBLE_MIN = 1.5;
const visible = (list || []).filter(s => (s.rating ?? 0) > VISIBLE_MIN);
  return (
    <div className="table-wrap">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {visible.map((s) => (
            <tr key={s.name}>
              <td>
                <div className="skill-cell">
                  {s.icon && <img src={s.icon} alt="" className="skill-icon" />}
                  {s.url ? (
                    <a href={s.url} target="_blank" rel="noreferrer" className="skill-link">
                      {s.name}
                    </a>
                  ) : (
                    <span>{s.name}</span>
                  )}
                </div>
              </td>
              <td>
                <RatingBar value={s.rating ?? 0} color={s.color || "#F7DF1E"} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// 0..5 -> bar 0..100%; optional per-skill color
function RatingBar({ value = 0, color }) {
  const pct = Math.max(0, Math.min(5, value)) / 5 * 100;
  const label = value.toFixed(1);

  return (
    <div className="rate" role="img" aria-label={`${label} out of 5`}>
      <div className="rate-track">
        <div
          className="rate-fill"
          style={{
            width: `${pct}%`,
            // prefer per-skill color (from JSON), fallback to your neon green
            background: color
              ? `linear-gradient(90deg, ${color}, ${color})`
              : "linear-gradient(90deg, #34d399, #22c55e)"
          }}
        />
      </div>
      {/* <span className="rate-label">{label}</span> */}
    </div>
  );
}
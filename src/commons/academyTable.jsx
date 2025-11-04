import React, { useMemo, useState } from "react";

export default function AcademyTable({ schools }) {
  const [schoolIdx, setSchoolIdx] = useState(0);

  const school = schools?.[schoolIdx] || { courses: [] };
  // tạo danh sách term duy nhất + All
  const terms = useMemo(() => {
    const set = new Set((school.courses || []).map(c => c.term).filter(Boolean));
    return ["All terms", ...Array.from(set)];
  }, [school]);

  const [term, setTerm] = useState("All terms");

  const filtered = useMemo(() => {
    if (term === "All terms") return school.courses || [];
    return (school.courses || []).filter(c => c.term === term);
  }, [school, term]);

  return (
    <div className="academy">
      {/* Controls */}
      <div className="academy-controls">
        <label>
          School:&nbsp;
          <select
            value={schoolIdx}
            onChange={e => { setSchoolIdx(Number(e.target.value)); setTerm("All terms"); }}
          >
            {schools.map((s, i) => (
              <option key={s.name + i} value={i}>{s.name}</option>
            ))}
          </select>
        </label>

        <label>
          &nbsp;&nbsp;Term:&nbsp;
          <select value={term} onChange={e => setTerm(e.target.value)}>
            {terms.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </label>
      </div>

      {/* Header */}
      <div className="academy-box">
        <div className="academy-head">
          <div className="academy-name">{school.name || "—"}</div>
          {school.program && <div className="academy-prog">{school.program}</div>}
        </div>

        {/* Table */}
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th style={{ width: "6rem" }}>Code</th>
                <th>Course</th>
                <th style={{ width: "10rem" }}>Term</th>
                <th style={{ width: "6rem" }}>Grade</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((c, i) => (
                <tr key={(c.code || "C") + i}>
                  <td>{c.code || "—"}</td>
                  <td>{c.title}</td>
                  <td>{c.term || "—"}</td>
                  <td className="mono">{c.grade ?? "—"}</td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={4} className="muted">No courses for this term.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
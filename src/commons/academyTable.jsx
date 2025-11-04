import React from "react";

export default function AcademyTable({ schools }) {
    return (
        <div className="academy">
            {schools.map((sch) => (
                <div className="academy-box" key={sch.name}>
                    <div className="academy-head">
                        <div className="academy-name">{sch.name}</div>
                        {sch.program && <div className="academy-prog">{sch.program}</div>}
                    </div>
                    <div className="table-wrap">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th style={{ width: "6rem" }}>Code</th>
                                    <th>Course</th>
                                    <th style={{ width: "8rem" }}>Term</th>
                                    <th style={{ width: "6rem" }}>Grade</th>
                                </tr>
                            </thead>
                            <tbody>
                                {(sch.courses || []).map((c, i) => (
                                    <tr key={sch.name + i}>
                                        <td>{c.code || "—"}</td>
                                        <td>{c.title}</td>
                                        <td>{c.term || "—"}</td>
                                        <td className="mono">{c.grade ?? "—"}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ))}
        </div>
    );
}
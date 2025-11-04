import React from "react";


export default function CertsTable({ items }) {
    return (
        <div className="table-wrap">
            <table className="table">
                <thead>
                    <tr>
                        <th>Provider</th>
                        <th>Certificate</th>
                        <th style={{ width: "9rem" }}>Issued</th>
                        <th style={{ width: "11rem" }}>Credential ID</th>
                        <th style={{ width: "5rem" }}>File</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((it, i) => (
                        <tr key={it.title + i}>
                            <td>{it.provider}</td>
                            <td>
                                <div className="cert-title">{it.title}</div>
                                {it.description && <div className="muted">{it.description}</div>}
                            </td>
                            <td>{it.issued || "—"}</td>
                            <td className="mono">{it.credentialId || "—"}</td>
                            <td>
                                {it.file ? (
                                    <a href={it.file} className="link" target="_blank" rel="noreferrer">Open</a>
                                ) : (
                                    <span className="muted">—</span>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
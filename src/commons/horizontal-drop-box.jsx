import React from "react";

export default function HorizontalDropBox({ items, value, onChange, compact = false }) {
    return (
        <div className={"hdbox" + (compact ? " hdbox-compact" : "")}>
            <div className="hdbox-track">
                {items.map((it) => (
                    <button
                        key={it.key}
                        className={"hdbox-pill" + (value === it.key ? " is-active" : "")}
                        onClick={() => onChange(it.key)}
                        type="button"
                    >
                        {it.label}
                    </button>
                ))}
            </div>
        </div>
    );
}
import { useMemo, useState } from "react";

export default function Card({
  title,
  children,
  ty = false,
  collapsible = false,
  defaultOpen = true,
  className = "",          // 🔹 NEW
}) {
  const [open, setOpen] = useState(defaultOpen);
  const bodyId = useMemo(
    () => "card-body-" + Math.random().toString(36).slice(2),
    []
  );

  return (
    <section
      className={`card${collapsible ? " is-collapsible" : ""}${open ? " is-open" : " is-closed"} ${className}`}
    >
      {title && (
        <h3 className="card-title">
          {collapsible ? (
            <button
              type="button"
              className="card-title-btn"
              aria-expanded={open}
              aria-controls={bodyId}
              onClick={() => setOpen(o => !o)}
            >
              <span className="card-title-text" {...(ty ? { "data-ty": true } : {})}>
                {title}
              </span>
              <span className={`chev ${open ? "open" : ""}`} aria-hidden="true" />
            </button>
          ) : (
            <span className="card-title-text" {...(ty ? { "data-ty": true } : {})}>
              {title}
            </span>
          )}
        </h3>
      )}

      {(!collapsible || open) && (
        <div id={bodyId} className="card-body">
          {children}
        </div>
      )}
    </section>
  );
}

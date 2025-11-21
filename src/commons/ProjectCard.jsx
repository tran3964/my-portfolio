import ProjectGallery from "./ProjectGallery";

export default function ProjectCard({ project }) {
  if (!project) return null;

  const { title, team, location, period, status, summary, slides } = project;

  return (
    <article className="project-card">
      {/* Header with title + time period */}
      <header className="project-card-header">
        <div>
          <h3 className="project-title" data-ty>
            {title}
          </h3>
          <div className="project-meta">
            <span>{team} | {location}</span>
            <span className="project-period">{period}</span>
          </div>
        </div>

        {status && (
          <span
            className={`project-status badge badge--${status === "ongoing" ? "ongoing" : "done"}`}
          >
            {status === "ongoing" ? "In Progress" : "Completed"}
          </span>
        )}
      </header>

      {/* Summary bullets */}
      {Array.isArray(summary) && summary.length > 0 && (
        <ul className="project-summary">
          {summary.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      )}

      {/* Image + text slider */}
      <ProjectGallery slides={slides || []} />
    </article>
  );
}

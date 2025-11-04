export default function Card({ title, children, ty = false }) {
    return (
        <section className="about-card">
            {title && <h3 className="about-title" {...(ty ? { 'data-ty': true } : {})}>{title}</h3>}
            <div className="about-body">{children}</div>
        </section>
    )
}
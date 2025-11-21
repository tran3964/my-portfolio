import Layout from "../commons/Layout";
import Card from "../commons/Card";
import ProjectCard from "../commons/ProjectCard";
import ProjectData from "../data/projects.json";

export default function Projects() {
    const projects = Array.isArray(ProjectData) ? ProjectData : [];
    return (
        <Layout>
            <div className="projects-page">
                <h2 className="page-title" data-ty>
                    Projects & Work Experience
                </h2>

                <div className="projects-grid">
                    {projects.map((p) => (
                        <Card
                            key={p.id}
                            collapsible={true}
                            defaultOpen={true}
                            className="card--project"
                        >
                            <ProjectCard project={p} />
                        </Card>
                    ))}
                </div>
            </div>
        </Layout>
    )
}
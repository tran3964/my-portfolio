import Layout from "../commons/Layout";
import Card from "../commons/Card";
import SkillTable from "../commons/skillsTable"
import AcademyTable from "../commons/academyTable"
import CertsTable from "../commons/certsTable"

import AboutData from "../data/about.json"
import AcademyData from "../data/academy.json"
import CertificationData from "../data/certifications.json"

export default function SkillsCert() {
    const about = AboutData || {};
    const academy = AcademyData || { schools: [] };
    const certs = CertificationData || { items: [] };
    return (
        <Layout>
            <div className="skill-cert">
                <h2 className="page-title">Skills &amp; Academy</h2>


                <div className="skills-academy-row">
                    <Card title="Skills" ty collapsible defaultOpen className="card--compact">
                        <SkillTable skills={about.skills || {}} />
                    </Card>

                    <Card title="Academy" ty collapsible defaultOpen className="card--compact">
                        <AcademyTable schools={academy.schools || []} />
                    </Card>
                </div>

                {/* <div className="certifications-zone">
                    <Card title="Certifications" ty collapsible defaultOpen>
                        <CertsTable items={certs.items} />
                    </Card>
                </div> */}
            </div>
        </Layout>
    )
}
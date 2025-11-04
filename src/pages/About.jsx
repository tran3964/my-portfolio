import data from '../data/about.json';
import Card from '../commons/Card';
import IconStrip from '../commons/IconStrip';
import Layout from '../commons/Layout';
import { useEffect } from 'react';
import { initIconStrips } from '../utils/initIconStrip';

export default function About() {
    const { bio, interests, hobbies, skills } = data;
    useEffect(() =>{
        initIconStrips();
    },[])
    return (
        <Layout>
            <div className="about-page container">
                <Card title="My Current:" ty>
                    <p data-ty data-delay="200">{bio}</p>
                </Card>
                <div className="about-grid">
                    <Card title="Core of Interest" ty>
                        <ul>
                            {interests.map((t, i) => <li key={i} data-ty data-delay={200 + i * 120}>{t}</li>)}
                        </ul>
                    </Card>

                    <Card title="Hobbies" ty>
                        <ul>
                            {hobbies.map((t, i) => <li key={i} data-ty data-delay={200 + i * 120}>{t}</li>)}
                        </ul>
                    </Card>
                </div>

                <Card title="Programming Languages" ty>
                    <IconStrip items={skills.languages} speed={24} />
                </Card>

                <Card title="Framework">
                    <IconStrip items={skills.frameworks} speed={26} />
                </Card>

                <div className="about-grid">
                    <Card title="Web Tech" ty>
                        <IconStrip items={skills.web} speed={28} />
                    </Card>

                    <Card title="Databases" ty>
                        <IconStrip items={skills.databases} speed={28} />
                    </Card>
                </div>

                <Card title="Other Tools">
                    <IconStrip items={skills.other_tools} speed={26} />
                </Card>
            </div>
        </Layout>
    );
}
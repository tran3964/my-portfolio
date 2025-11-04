import Layout from "../commons/Layout";
import Section from "../commons/Section";
import Button from "../commons/Button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Layout>
      <Section title="Hello I’m Nguyen Tran">
        <p className="text-zinc-300">
          Full-stack developer with interests in game development and multitasking projects.
        </p>
        <div className="mt-4 flex gap-3">
          <Link to="/projects"><Button>View Projects</Button></Link>
          <Link to="/contact"><Button variant="outline">Contact</Button></Link>
        </div>
      </Section>
    </Layout>
  );
}

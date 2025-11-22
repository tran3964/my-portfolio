import Layout from "../commons/Layout";
import Card from "../commons/Card";
import asset from "../utils/asset";
import avatar from "../assets/528020337_2525214064537831_6149755178532786936_n.jpg"; // put your image here

export default function Contact() {
  return (
    <Layout>
      <Card title="Contact Me" defaultOpen>
        <div className="contact-container">
          {/* Avatar */}
          <div className="contact-avatar">
            <img src={avatar} alt="Nguyen Tran" />
          </div>

          {/* Social icons */}
          <div className="contact-icons">
            <a
              href="mailto:tranchaugianguyen.201204@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={asset("icons/gmail.svg")} alt="Gmail" />
            </a>

            <a
              href="https://www.linkedin.com/in/nguyen-tran-a4b693327/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={asset("icons/linkedIn.svg")} alt="LinkedIn" />
            </a>

            <a
              href="https://github.com/tran3964"
              target="_blank"
              rel="noreferrer"
            >
              <img src={asset("icons/github.svg")} alt="GitHub" />
            </a>
          </div>
        </div>
      </Card>
    </Layout>
  );
}

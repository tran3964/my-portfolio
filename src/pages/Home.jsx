import { useNavigate } from "react-router-dom";
import avatar from "../assets/528020337_2525214064537831_6149755178532786936_n.jpg"; // put your image here
import Layout from "../commons/Layout";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Layout>
          <section className="hero">
      <div className="hero-card">
        {/* avatar */}
        <img
          src={avatar}
          alt="Nguyen Tran avatar"
          className="hero-avatar"
          loading="eager"
        />

        {/* text + CTAs */}
        <div className="hero-text">

          <p className="hero-desc">
            Welcome to my digital portfolio!<br/>
            <strong>My name is Nguyen Tran</strong>, and I am a
            full-stack software developer with a strong foundation in Java,
            Kotlin, JavaScript, and modern frameworks. I enjoy building both web
            and applications for mobile and desktop that combine functionality
            with engaging user experiences.
          </p>

          <div className="hero-cta">
            <button
              type="button"
              className="cta cta-primary"
              onClick={() => navigate("/about")}
            >
              Go to About Me
            </button>

            <button
              type="button"
              className="cta cta-ghost"
              onClick={() => navigate("/contact")}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </section>
    </Layout>
  );
}

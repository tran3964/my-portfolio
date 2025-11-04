import { useNavigate } from "react-router-dom";
import avatar from "../assets/528020337_2525214064537831_6149755178532786936_n.jpg"; // put your image here
import Layout from "../commons/Layout";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Layout>
      <section className="hero">
        <img
          src={avatar}
          alt="Nguyen Tran avatar"
          className="hero-avatar"
          loading="eager"
        />
        <div className="hero-card">
          {/* text + CTAs */}
          <div className="hero-text">
            <div class="hero-header">
              <h1 class="hero-welcome" data-ty data-speed="18" data-cursor="▍">WELCOME</h1>
              <div class="hero-sub">
                <p class="intro-top" data-ty data-speed="30" data-delay="300">
                  to my <span class="highlight">DIGITAL PORTFOLIO</span>
                </p>
                <p class="intro-name"  data-ty data-delay="900" data-speed="24" data-cursor="|">
                  I am <span class="highlight-name">NGUYEN TRAN</span>
                </p>
              </div>
            </div>
            <h2 class="hero-role" data-ty data-loop="true" data-speed="26" data-backspeed="40" data-pause="1400">Full-stack software Developer</h2>
            <p class="hero-desc" data-ty data-speed="28" data-delay="1200">
              with a strong foundation in Java, Kotlin, JavaScript, and modern
              frameworks. I enjoy building both web and applications for mobile
              and desktop that combine functionality with engaging user
              experiences.
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

import GradientWaves from "@/components/GradientWaves/GradientWaves";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { FaGithub, FaGitlab, FaLinkedin } from "react-icons/fa6";

import "@/pages/Home/Home.css";

function Home() {
  const { t } = useTranslation();

  const styles = getComputedStyle(document.documentElement);
  const waveHorizon = styles.getPropertyValue("--color-wave-horizon").trim();
  const waveColor = styles.getPropertyValue("--color-wave").trim();
  const waveCrest = styles.getPropertyValue("--color-wave-crest").trim();

  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(".home__section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-30% 0px -60% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="home">
      <div className="home__background">
        <GradientWaves
          speed={0.45}
          horizonColor={waveHorizon}
          waveColor={waveColor}
          crestColor={waveCrest}
        />
      </div>

      <div className="home__background-overlay" />

      <div className="home__layout">
        <aside className="home__sidebar">
          <div>
            <h1 className="home__title">{t("home.title")}</h1>
            <h2 className="home__subtitle">{t("home.subtitle")}</h2>

            <p className="home__description">{t("home.description")}</p>

            <nav className="home__navigation">
              <a
                href="#about"
                className={activeSection === "about" ? "active" : ""}
              >
                {t("home.about")}
              </a>

              <a
                href="#experience"
                className={activeSection === "experience" ? "active" : ""}
              >
                {t("home.experience")}
              </a>

              <a href="#projects" className={activeSection ? "projects" : ""}>
                {t("home.projects")}
              </a>
            </nav>
          </div>

          <div className="home__socials">
            <a
              href="https://github.com/KimHejer"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/kim-hejer-80768a413/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://gitlab.com/KimHejer"
              target="_blank"
              rel="noreferrer"
              aria-label="GitLab"
              title="GitLab"
            >
              <FaGitlab />
            </a>
          </div>
        </aside>

        <div className="home__content">
          <section id="about" className="home__section">
            <h2>{t("home.about")}</h2>

            <p>{t("home.introduction1")}</p>
            <p>{t("home.introduction2")}</p>
            <p>{t("home.introduction3")}</p>
          </section>

          <section id="experience" className="home__section">
            <h2>{t("home.experience")}</h2>

            <article className="experience">
              <div className="experience__header">
                <div>
                  <h3 className="experience__title">
                    <a
                      href="https://www.sintef.no/prosjekter/2026/3lyd/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      3LYD
                    </a>
                    <span> - {t("experience.3lyd.role")}</span>
                  </h3>

                  <p className="experience__period">
                    {t("experience.3lyd.period")}
                  </p>

                  <p className="experience__organizations">
                    {t("experience.3lyd.organizations")}
                  </p>
                </div>
              </div>

              <div className="experience__descriprion">
                <p>{t("experience.3lyd.description1")}</p>
                <p>{t("experience.3lyd.description2")}</p>
                <p>{t("experience.3lyd.description3")}</p>
              </div>

              <div className="experience__technologies">
                <span>React</span>
                <span>TypeScript</span>
                <span>FastAPI</span>
                <span>PostgreSQL</span>
                <span>Docker</span>
              </div>
            </article>
          </section>

          <section id="projects" className="home__section">
            <h2>{t("home.projects")}</h2>

            <p>--- Under construction ---</p>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Home;

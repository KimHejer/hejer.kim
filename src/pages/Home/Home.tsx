import GradientWaves from "@/components/GradientWaves/GradientWaves";
import { useTranslation } from "react-i18next";

import "@/pages/Home/Home.css";

function Home() {
  const { t } = useTranslation();
  const styles = getComputedStyle(document.documentElement);
  const waveHorizon = styles.getPropertyValue("--color-wave-horizon");
  const waveColor = styles.getPropertyValue("--color-wave");
  const waveCrest = styles.getPropertyValue("--color-wave-crest");

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

      <section className="home__intro">
        <h1 className="home__title">{t("home.title")}</h1>
        <p className="home__subtitle">{t("home.subtitle")}</p>
      </section>

      <section className="home__content">
        <h2>Content</h2>
      </section>
    </main>
  );
}

export default Home;

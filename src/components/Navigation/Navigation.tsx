import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import logoIcon from "@/assets/logo.png";
import "@/components/Navigation/Navigation.css";

function Navigation() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`navigation ${scrolled ? "navigation--scrolled" : ""}`}>
      <nav className="navigation__inner">
        <NavLink to="/" className="navigation__brand">
          <img
            src={logoIcon}
            alt={t("navigation.brand")}
            className="navigation__brand-icon"
          />
        </NavLink>

        <div className="navigation__links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `navigation__link ${isActive ? "navigation__link--active" : ""}`
            }
          >
            {t("navigation.home")}
          </NavLink>

          <NavLink
            to="/test"
            className={({ isActive }) =>
              `navigation__link ${isActive ? "navigation__link--active" : ""}`
            }
          >
            {t("navigation.test")}
          </NavLink>

          <button className="navigation__language" type="button">
            {t("navigation.language")}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;

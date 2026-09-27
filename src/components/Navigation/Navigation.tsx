import { NavLink } from "react-router-dom";
import { LuLanguages } from "react-icons/lu";
import { useTranslation } from "react-i18next";

import logoIcon from "@/assets/logo.png";
import "./Navigation.css";

function Navigation() {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const currentLanguage = i18n.language.startsWith("no") ? "NO" : "EN";

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "EN" ? "no" : "en";

    i18n.changeLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  return (
    <header className="navigation">
      <nav className="navigation__inner">
        <NavLink to="/" className="navigation__brand" aria-label="Home">
          <img src={logoIcon} alt="" className="navigation__brand-icon" />
        </NavLink>

        <button
          type="button"
          className="navigation__language"
          onClick={toggleLanguage}
          aria-label="Change Language"
          title={t("navigation.changeLanguage")}
        >
          <LuLanguages />
          <span>{currentLanguage}</span>
        </button>
      </nav>
    </header>
  );
}

export default Navigation;

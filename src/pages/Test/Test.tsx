import { useTranslation } from "react-i18next"

function Test() {
    const { t } = useTranslation();

    return (
        <main>
            <h1>{t("test.title")}</h1>
        </main>
    );
}

export default Test;
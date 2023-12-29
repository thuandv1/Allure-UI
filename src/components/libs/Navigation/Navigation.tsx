import SectionContent from "components/SectionContent";
import Content from "components/base/Content";
import { usage } from "data/navigation";
import TranslatedNavView from "./Example/BasicNav";
import { NavigationCollapsedView } from "./Example/CollapseNav";
import { useTranslation } from "react-i18next";

function Navigation() {
  const [t] = useTranslation(["navigation_menu", "common"]);

  return (
    <Content title={t("title")} desc={t("desc")}>
      <SectionContent
        title={t("common:usage")}
        uses={[t("usage_1"), t("usage_2"), t("usage_3")]}
        component={<TranslatedNavView />}
        extraCode={usage.basic.code}
      />
      <SectionContent
        title={t("collapse")}
        desc={t("collapse_desc")}
        component={<NavigationCollapsedView />}
        extraCode={usage.collapsed.code}
      />
    </Content>
  );
}

export default Navigation;

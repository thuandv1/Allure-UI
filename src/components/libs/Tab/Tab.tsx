import { useTranslation } from "react-i18next";

import SectionContent from "components/SectionContent";
import Content from "components/base/Content";
import { usage } from "data/tab";
import { TabBasicView } from "./Example/BasicTab";
import { TabCordView } from "./Example/CardTab";
import { VerticalTabView } from "./Example/VerticalTab";

function Tab() {
  const [t] = useTranslation(["tab", "common"]);

  return (
    <Content
      title={t("title", {
        index: ""
      })}
      desc={t("desc")}
    >
      <SectionContent
        title={t("common:usage")}
        desc={t("usage_desc")}
        extraCode={usage.basic.code}
        component={<TabBasicView />}
      />
      <SectionContent
        title={t("card")}
        desc={t("card_desc")}
        extraCode={usage.card.code}
        component={<TabCordView />}
      />
      <SectionContent
        title={t("vertical")}
        desc={t("vertical_desc")}
        extraCode={usage.vertical.code}
        component={<VerticalTabView />}
      />
    </Content>
  );
}

export default Tab;

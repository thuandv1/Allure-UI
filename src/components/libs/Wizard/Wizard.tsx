import { useTranslation } from "react-i18next";

import SectionContent from "components/SectionContent";
import Content from "components/base/Content";
import { usage } from "data/wizard";
import { SampleHorizontal } from "./Example/HorizontalWizard";
import { SampleVertical } from "./Example/VerticalWizard";

function Wizard() {
  const [t] = useTranslation(["wizard", "common"]);

  return (
    <Content title={t("title")} desc={t("desc")}>
      <SectionContent title={t("common:when_to_use")} desc={t("use_desc")} />
      <SectionContent
        title={t("horizontal")}
        desc={t("horizontal_desc")}
        extraCode={usage.horizontal.code}
        component={<SampleHorizontal />}
      />
      <SectionContent
        title={t("vertical")}
        desc={t("vertical_desc")}
        extraCode={usage.vertical.code}
        component={<SampleVertical />}
      />
    </Content>
  );
}

export default Wizard;

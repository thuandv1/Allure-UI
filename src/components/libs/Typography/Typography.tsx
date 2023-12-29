import { useTranslation } from "react-i18next";

import SectionContent from "components/SectionContent";
import Content from "components/base/Content";
import { usage } from "data/typography";
import { SampleText } from "./Sample/SampleText";

function Typography() {
  const [t] = useTranslation("typography");

  return (
    <Content title={t("title")} desc={t("desc")}>
      <SectionContent title={t("spacing")} desc={usage.spacing.desc} />
      <SectionContent
        title={t("font")}
        extraCode={usage.font.code}
        component={<SampleText />}
      />
    </Content>
  );
}

export default Typography;

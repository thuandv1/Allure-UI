import { useTranslation } from "react-i18next";

import SectionContent from "components/SectionContent";
import Content from "components/base/Content";
import { usage } from "data/breadcrumb";
import { SampleRoot } from "./Example/SampleRoot";
import { SampleNonClickable } from "./Example/SampleNonClick";
import { SampleBasic } from "./Example/SampleBasic";
import { SampleOverflowIndex } from "./Example/SampleOverFlowIndex";
import { SampleMaxDisplayedItems } from "./Example/SampleMaxDisplay";

function Breadcrumb() {
  const [t] = useTranslation(["breadcrumb", "common"]);

  return (
    <Content title={t("title")} desc={t("desc")}>
      <SectionContent title="" desc={t("usage_desc")}>
        <p>
          <b>{t("dont_use")}</b>
        </p>
        <br />
        {[t("dont_1"), t("dont_2"), t("dont_3")].map((item) => (
          <p>- {item}</p>
        ))}
      </SectionContent>
      <SectionContent
        title={t("common:usage")}
        desc={t("usage_desc")}
        extraCode={usage.basic.code}
        component={<SampleRoot />}
      />
      <SectionContent
        title={t("common:usage")}
        desc={t("usage_desc_1")}
        extraCode={usage.second.code}
        component={<SampleNonClickable />}
      />
      <SectionContent
        title=""
        desc={t("usage_desc_2")}
        extraCode={usage.third.code}
        component={<SampleBasic />}
      />
      <SectionContent
        title=""
        desc={t("usage_desc_3")}
        extraCode={usage.fourth.code}
        component={<SampleOverflowIndex />}
      />
      <SectionContent
        title=""
        desc={t("usage_desc_4")}
        extraCode={usage.fourth.code}
        component={<SampleMaxDisplayedItems />}
      />
    </Content>
  );
}

export default Breadcrumb;

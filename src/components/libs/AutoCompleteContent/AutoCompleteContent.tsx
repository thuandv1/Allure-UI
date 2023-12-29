import { AutoComplete } from "@gui/fluent-ui-allure";
import SectionContent from "components/SectionContent";
import Content from "components/base/Content";
import { usage } from "data/autoComplete";
import { useTranslation } from "react-i18next";

function AutoCompleteContent() {
  const [t] = useTranslation(["auto_complete", "common"]);

  return (
    <Content title={t("title")} desc={t("desc")}>
      <SectionContent
        title={t("common:when_to_use")}
        uses={[t("use_1"), t("use_2"), t("use_3")]}
      />
      <SectionContent
        title={t("common:basic_usage")}
        desc={t("basic_desc")}
        component={
          <div style={{ width: 280 }}>
            <AutoComplete placeholder={t("common:input")} />
          </div>
        }
        extraCode={usage.basic.code}
      />
      <SectionContent
        title={t("search")}
        desc={t("search_desc")}
        component={
          <div style={{ width: 280 }}>
            <AutoComplete placeholder={t("common:input")} showIcon />
          </div>
        }
        extraCode={usage.basic.code}
      />
    </Content>
  );
}

export default AutoCompleteContent;

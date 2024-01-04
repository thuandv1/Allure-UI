import SectionContent from "components/SectionContent";
import Content from "components/base/Content";
import { code } from "data/datePicker";
import { useTranslation } from "react-i18next";
import { SampleBasic } from "./Example/Basic";

function DatePicker() {
  const [t] = useTranslation(["date_picker", "common"]);

  return (
    <Content title={t("title")} desc={t("desc")}>
      <SectionContent
        title={t("common:basic_usage")}
        desc={t("basic_desc")}
        extraCode={code.basic}
        component={<SampleBasic />}
      />
      <></>
    </Content>
  );
}

export default DatePicker;

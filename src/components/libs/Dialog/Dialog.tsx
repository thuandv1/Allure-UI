import SectionContent from "components/SectionContent";
import Content from "components/base/Content";
import { usage } from "data/dialog";
import { DialogSample } from "./Sample/DialogSample";
import { DialogConfirm } from "./Sample/DialogConfirm";
import { useTranslation } from "react-i18next";

function Dialog() {
  const [t] = useTranslation(["dialog", "common"]);

  console.log([t("uses_1", t("uses_2"))]);

  return (
    <Content title={t("title")} desc={t("desc")}>
      <SectionContent
        title={t("common:when_to_use")}
        uses={[t("uses_1"), t("uses_2")]}
      />
      <SectionContent
        title={t("common:basic_usage")}
        extraCode={usage.basic.code}
      >
        <DialogSample />
      </SectionContent>
      <SectionContent
        title={t("confirm")}
        extraCode={usage.confirm.code}
      >
        <DialogConfirm />
      </SectionContent>
    </Content>
  );
}

export default Dialog;

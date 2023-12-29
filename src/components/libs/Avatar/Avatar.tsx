import SectionContent from "components/SectionContent";
import Content from "components/base/Content";
import { usage } from "data/avatar";
import { SampleBasic } from "./Example/BasicAvatar";
import { SampleImage } from "./Example/ImageAvatar";
import { SampleSquare } from "./Example/SquareAvatar";
import { useTranslation } from "react-i18next";

function Avatar() {
  const [t] = useTranslation(["avatar", "common"]);

  return (
    <Content title={t("title")} desc={t("desc")}>
      <SectionContent
        title={t("common:when_to_use")}
        desc={`${t("use_desc")} \n \n ${t("not_use")}`}
        uses={[t("not_1"), t("not_2")]}
      ></SectionContent>
      <SectionContent
        title={t("common:basic_usage")}
        desc={t("basic_desc")}
        extraCode={usage.basic.code}
        component={<SampleBasic />}
      />
      <SectionContent
        title={t("image")}
        desc={t("image_desc")}
        extraCode={usage.image.code}
        component={<SampleImage />}
      />
      <SectionContent
        title={t("square")}
        desc={t("quare_desc")}
        extraCode={usage.square.code}
        component={<SampleSquare />}
      />
    </Content>
  );
}

export default Avatar;

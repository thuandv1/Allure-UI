import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./IconContent.module.scss";
import Content from "components/base/Content";
import { heading, desc, refer, usage } from "data/icon";
import TypoUsage from "components/TypoUsage/TypoUsage";
import SectionContent from "components/SectionContent";
import { BasicIcon } from "./Sample/BasicIcon";
import { ColorIcon } from "./Sample/ColorIcon";
import { OfficeIcon } from "./Sample/OfficeIcon";
import { OfficeColorIcon } from "./Sample/OfficeColorIcon";
import { useTranslation } from "react-i18next";

const cx = classNames.bind(styles);

function IconContent() {
  const [t] = useTranslation(["icon", "common"]);

  return (
    <Content title={t("title")}>
      <p className={cx("text")}>
        Font awesome V6 {t("free")} &nbsp;
        <Link to={refer.awesome.link}>{refer.awesome.link}</Link>
      </p>
      <p>
        {refer.microsoft.title} &nbsp;
        <Link to={refer.microsoft.link}>{refer.microsoft.link}</Link>
      </p>
      <TypoUsage text={t("desc")} />
      <SectionContent
        title={`Font awesome ${t("common:basic_usage").toLowerCase()}`}
        extraCode={usage.basic.code}
        component={<BasicIcon />}
      />
      <SectionContent
        title={`Font awesome ${t("custom")}`}
        extraCode={usage.color.code}
        component={<ColorIcon />}
      />
      <SectionContent
        title={`Office UI Fabric Icons ${t(
          "common:basic_usage"
        ).toLowerCase()}`}
        extraCode={usage.office.code}
        component={<OfficeIcon />}
      />
      <SectionContent
        title={`Office UI Fabric Icons ${t("custom")}`}
        extraCode={usage.officeColor.code}
        component={<OfficeColorIcon />}
      />
    </Content>
  );
}

export default IconContent;
